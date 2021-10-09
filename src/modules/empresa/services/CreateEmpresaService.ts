import Empresa from "../model/empresa";
import AppError from "@shared/errors/AppError";
import { Response, Request, response } from 'express';

interface IRequest {
    nome: string
    cpf_cnpj: string;
    email: string;
    senha: string;
    telefone: string;
}

class CreateEmpresaService {
    public async execute({nome, cpf_cnpj, email, senha, telefone}: IRequest ): Promise<Response>{
        const empresa = await Empresa;

        const cpf_cnpjExist = await empresa.findOne({where: {cpf_cnpj: cpf_cnpj}});

        if( cpf_cnpjExist ) {
            throw new AppError('CPJ ou CNPJ já cadastrado.');
        }
        const emailExist = await empresa.findOne({where: {email: email}});
        if( emailExist ) {
            throw new AppError('E-mail já cadastrado.');
        }

        await empresa.create({nome, cpf_cnpj, email, senha, telefone});
        return response.json(empresa);
    }
}
import Empresa from "../model/EmpresaModel";
import AppError from "@shared/errors/AppError";
import { Response, Request } from 'express';


class CreateEmpresaService {
    public async create(req: Request, res: Response) {
        const { nome, cpf_cnpj, email, senha, telefone } = req.body;

        const empresa = await Empresa;
        
        const cpf_cnpjExist = await empresa.findOne({where: {cpf_cnpj: cpf_cnpj}});

        if( cpf_cnpjExist ) {
            throw new AppError('CPJ ou CNPJ já cadastrado.');
        }
        const emailExist = await empresa.findOne({where: {email: email}});
        if( emailExist ) {
            throw new AppError('E-mail já cadastrado.');
        }

        const resultadoEmpresa = await empresa.create({ 
            nome, 
            cpf_cnpj, 
            email, 
            senha, 
            telefone
        });
        
        return res.json(resultadoEmpresa);
    }
}
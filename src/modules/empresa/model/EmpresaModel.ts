import { DataTypes, Model } from 'sequelize';
import connection from '@shared/sequelize';

interface EmpresaAtributos {
    nome: string;
    cpf_cnpj: string;
    email: string;
    senha: string;
    telefone: string;
}


export class EmpresaInstacia extends Model<EmpresaAtributos> {}

EmpresaInstacia.init(
	{

		nome: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        cpf_cnpj: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        senha: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        telefone: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize: connection,
		tableName: 'empresa',
	}
);

export default EmpresaInstacia
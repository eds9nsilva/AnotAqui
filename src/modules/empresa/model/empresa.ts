import { DataTypes, Model } from 'sequelize';
import connection from '@shared/sequelize';


class Emmpresa extends Model{
    public id!: number
    public nome!: string
    public cpf_cnpj!: string;
    public email!: string;
    public senha!: string;
    public telefone!: string;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;    
}

Emmpresa.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
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
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
  timestamps: true,
  sequelize: connection,
  paranoid: true
})

export default Emmpresa;
import { DataTypes } from "sequelize/types";
import { db } from "@shared/sequelize";

export const EmpresaModel = db.define("empresa",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
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
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
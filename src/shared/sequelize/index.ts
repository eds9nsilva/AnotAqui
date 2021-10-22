import { Sequelize } from "sequelize";

export const db = new Sequelize (
    process.env.APP_BD_DATABASE,
    process.env.APP_BD_USERNAME,
    process.env.APP_BD_PASS,
    {
        dialect: 'postgres',
        host: process.env.APP_BD_URL,
        port: process.env.APP_BD_PORT,
    }
   
)
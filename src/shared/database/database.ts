module.exports = {
    dialect: 'postgres',
    host: process.env.APP_BD_URL,
    port: process.env.APP_BD_PORT,
    username: process.env.APP_BD_USERNAME,
    password: process.env.APP_BD_PASS,
    database: process.env.APP_BD_DATABASE,
    define: {
        timestamps: true,
        underscored: true,
    }
}
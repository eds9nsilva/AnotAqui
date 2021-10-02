export default {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: 'docker',
    database: 'pcm',
    define: {
        timestamps: true,
        underscored: true,
    }
}
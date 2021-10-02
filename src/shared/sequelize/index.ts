import { Sequelize } from 'sequelize';
import dbConfig from '../database/database';

const connection =  new Sequelize(dbConfig);

export default connection;
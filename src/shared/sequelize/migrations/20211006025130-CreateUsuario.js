'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_empresa:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'empresa', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuario');
  }
};

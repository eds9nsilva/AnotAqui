'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('endereco_cliente', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_cliente:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'cliente', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rua: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pontoreferencia: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('endereco_cliente');
  }
};

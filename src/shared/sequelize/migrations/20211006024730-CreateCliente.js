'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cliente', { 
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
      apelido: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('cliente');
  }
};

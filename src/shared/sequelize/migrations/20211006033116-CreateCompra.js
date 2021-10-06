'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('compras', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_conta:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'conta', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      descricao_produtos: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor_total: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      hora: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      comprovante: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      id_usuario:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'usuario', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('compras');
  }
};

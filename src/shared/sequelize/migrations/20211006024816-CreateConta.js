'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('conta', { 
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
      limite: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('conta');
  }
};

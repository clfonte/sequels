'use strict';

module.exports = {
  // cria a table e suas linhas
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },

      name: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },

      email: {
        allowNull: false,
        type: Sequelize.STRING(80)
      },

      password: {
        allowNull: false,
        type: Sequelize.STRING(16)
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    })
  },

  // apaga a tabela se ocorrer atualização
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};

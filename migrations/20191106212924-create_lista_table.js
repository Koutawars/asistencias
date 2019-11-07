'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('listas', { 
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('listas');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clases', { 
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      }, 
      grupoId: {
          type: Sequelize.INTEGER(11),
          allowNull: false
      },
      tema: {
          type: Sequelize.STRING,
          allowNull: false
      },
      fecha: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      observaciones: {
          type: Sequelize.TEXT
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clases');
  }
};

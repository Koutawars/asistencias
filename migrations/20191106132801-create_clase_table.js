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
      usuarioId: {
          type: Sequelize.INTEGER(11),
          allowNull: false
      },
      tema: {
          type: Sequelize.STRING,
          allowNull: false
      },
      fecha: {
          type: Sequelize.DATE,
          allowNull: false
      },
      horaInicio: {
          type: Sequelize.TIME
      },
      horaFinal: {
          type: Sequelize.TIME
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

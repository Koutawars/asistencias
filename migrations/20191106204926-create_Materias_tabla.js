'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('materias', { 
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
          type: Sequelize.STRING,
          allowNull: false
      },
      creditos: {
          type: Sequelize.INTEGER,
          allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('materias');
  }
};

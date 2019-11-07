'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('grupos', { 
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      materiaId: {
          type: Sequelize.INTEGER(11),
          allowNull: false
      },
      usuarioId: {
          type: Sequelize.INTEGER(11),
          allowNull: false
      },
      listaId: {
          type: Sequelize.INTEGER(11),
          allowNull: true
      },
      numero: {
          type: Sequelize.INTEGER(11),
          allowNull: false
      },
      horarioId: {
          type: Sequelize.INTEGER(11),
          allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('grupos');
  }
};

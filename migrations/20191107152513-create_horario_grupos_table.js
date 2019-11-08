'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('horario_grupos', { 
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
    },
    grupoId: {
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
    return queryInterface.dropTable('horario_grupos');
  }
};


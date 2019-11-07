'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario_listas', { 
      usuarioId: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      listaId: {
          type: Sequelize.INTEGER(11),
          allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario_listas');
  }
};


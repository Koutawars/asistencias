'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario_clases', { 
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
      },
      usuarioId: {
          type: Sequelize.INTEGER(11),
          allowNull: false
      },
      claseId: {
          type: Sequelize.INTEGER(11),
          allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario_clases');
  }
};

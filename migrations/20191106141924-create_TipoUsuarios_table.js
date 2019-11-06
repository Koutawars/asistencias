'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tipoUsuarios', { 
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      timestamps: false
  });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tipoUsuarios');
  }
};

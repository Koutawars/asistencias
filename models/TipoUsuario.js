const Sequelize = require('sequelize');

module.exports = sequelize.define("TipoUsuario", {
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
      tableName: 'tipousuarios'
  });
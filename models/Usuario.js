const Sequelize = require('sequelize');

module.exports = sequelize.define("Usuario", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      tipoId: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      codigo: {
          type: Sequelize.INTEGER(15),
          allowNull: true
      },
      documento: {
          type: Sequelize.INTEGER(15),
          allowNull: false,
          unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      }
}, {
  tableName: 'usuarios'
});
const Sequelize = require('sequelize');

module.exports = sequelize.define("Lista", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    tableName: 'listas'
});
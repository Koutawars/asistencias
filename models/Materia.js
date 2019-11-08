const Sequelize = require('sequelize');

module.exports = sequelize.define("Materia", {
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
}, {
    tableName: 'materias'
});
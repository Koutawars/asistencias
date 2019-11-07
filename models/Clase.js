const Sequelize = require('sequelize');

module.exports = sequelize.define("Clase", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }, 
    grupoId: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    tema: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    observaciones: {
        type: Sequelize.TEXT
    }
}, {
    tableName: 'clases'
});
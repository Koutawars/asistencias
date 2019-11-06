const Sequelize = require('sequelize');

module.exports = sequelize.define("Clase", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }, 
    usuarioId: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    tema: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fecha: {
        type: Sequelize.DATE,
        allowNull: false
    },
    horaInicio: {
        type: Sequelize.TIME
    },
    horaFinal: {
        type: Sequelize.TIME
    },
    observaciones: {
        type: Sequelize.TEXT
    }
});
const Sequelize = require('sequelize');

module.exports = sequelize.define("Horario", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    dia: {
        type: Sequelize.INTEGER(2),
        allowNull: false
    },
    horaInicial: {
        type: Sequelize.TIME, 
        allowNull: false
    },
    horaFinal: {
        type: Sequelize.TIME, 
        allowNull: false
    }
}, {
    tableName: 'horarios'
});
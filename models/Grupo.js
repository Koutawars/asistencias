const Sequelize = require('sequelize');

module.exports = sequelize.define("Grupo", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    materiaId: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    usuarioId: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    listaId: {
        type: Sequelize.INTEGER(11),
        allowNull: true
    },
    numero: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    horarioId: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    }
}, {
    tableName: 'grupos'
});
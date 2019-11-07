// tabla intermedia entre usuario y lista

const Sequelize = require('sequelize');

module.exports = sequelize.define("Horario_grupo", {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
    },
    grupoId: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    horarioId: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    }
}, {
    tableName: 'horario_grupos'
});
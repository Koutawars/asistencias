// tabla intermedia entre usuario y lista

const Sequelize = require('sequelize');

module.exports = sequelize.define("Usuario_lista", {
    usuarioId: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    listaId: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    }
}, {
    tableName: 'usuario_listas'
});
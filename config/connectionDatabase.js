const Sequelize = require('sequelize');

const sequelize = new Sequelize("asistencia", 'root', 'camilo310', {
    host: '127.0.0.1', dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName:true
    }, 
    operatorAliases: false
});

module.exports = sequelize;
global.sequelize = sequelize;
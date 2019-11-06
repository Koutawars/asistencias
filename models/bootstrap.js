const Sequelize = require('sequelize');

module.exports = async () => {
    const Clase = require('./Clase');
    const Grupo = require('./Grupo');
    const Horario = require('./Horario');
    const Lista = require('./Lista');
    const Materia= require('./Materia');
    const TipoUsuario = require('./TipoUsuario');
    const Usuario = require('./Usuario');

    const Op = Sequelize.Op

    Usuario.hasMany(Grupo, { foreignKey: 'usuarioId'});
    Grupo.belongsTo(Usuario, { foreignKey: 'usuarioId'});

    Materia.hasMany(Grupo, {foreignKey: 'materiaId'});
    Grupo.belongsTo(Materia, {foreignKey: 'materiaId'});

    Lista.hasMany(Grupo, {foreignKey: 'listaId'});
    Grupo.belongsTo(Lista, {foreignKey: 'listaId'});

    Horario.hasMany(Grupo, {foreignKey: 'horarioId'});
    Grupo.belongsTo(Horario, {foreignKey: 'horarioId'});

    TipoUsuario.hasMany(Usuario, { foreignKey: 'tipoId'});
    Usuario.belongsTo(TipoUsuario, { foreignKey: 'tipoId'});

    Grupo.hasMany(Clase, { foreignKey: 'grupoId'});
    Clase.belongsTo(Grupo, { foreignKey: 'grupoId'});

    Usuario.hasMany(Lista, { foreignKey: 'usuarioId' });
    Lista.belongsTo(Usuario, { foreignKey: 'usuarioId' });

    const errHandler = (err) => {
        console.error("Error: ", err);
    };
    var datoPrueba = false;
    if(datoPrueba){
        const tipoUsuario = await TipoUsuario.create({
            tipo: "profesor"
        });
        
        const usuario = await Usuario.create({
            tipoId: tipoUsuario.id,
            nombre: "Johan David Robles Lozano",
            password: '123',
            codigo: 123,
            documento: 1076089044,
            email: "johanrobles@hotmail.com"
        }).catch(errHandler);

        /*
        const clase = await Clase.create({
            usuarioId: usuario.id,
            tema: "como estudiar",
            fecha: "2019-06-11",
            horaInicio: "07:02:02",
            horaFinal: "11:02:02",
            observaciones: ""
        }).catch(errHandler);*/
    }
};
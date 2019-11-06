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

    Usuario.hasMany(Grupo, { foreignkey: 'usuarioId'});
    Grupo.belongsTo(Usuario, { foreignkey: 'usuarioId'});

    Materia.hasMany(Grupo, {foreignkey: 'materiaId'});
    Grupo.belongsTo(Materia, {foreignkey: 'materiaId'});

    Lista.hasMany(Grupo, {foreignkey: 'listaId'});
    Grupo.belongsTo(Lista, {foreignkey: 'listaId'});

    Horario.hasMany(Grupo, {foreignkey: 'horarioId'});
    Grupo.belongsTo(Horario, {foreignkey: 'horarioId'});

    TipoUsuario.hasMany(Usuario, { foreignkey: 'tipoId'});
    Usuario.belongsTo(TipoUsuario, { foreignkey: 'tipoId'});

    Grupo.hasMany(Clase, { foreignkey: 'grupoId'});
    Clase.belongsTo(Grupo, { foreignkey: 'grupoId'});

    Usuario.hasMany(Lista, { foreignkey: 'usuarioId' });
    Lista.belongsTo(Usuario, { foreignkey: 'usuarioId' });

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

        const clase = await Clase.create({
            usuarioId: usuario.id,
            tema: "como estudiar",
            fecha: "2019-06-11",
            horaInicio: "07:02:02",
            horaFinal: "11:02:02",
            observaciones: ""
        }).catch(errHandler);
    }
};
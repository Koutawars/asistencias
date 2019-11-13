const Sequelize = require('sequelize');

module.exports = async () => {
    const Clase = require('./Clase');
    const Grupo = require('./Grupo');
    const Horario = require('./Horario');
    const Lista = require('./Lista');
    const Materia= require('./Materia');
    const TipoUsuario = require('./TipoUsuario');
    const Usuario = require('./Usuario');
    const Usuario_lista = require('./Usuario_lista');
    const Horario_grupo = require('./horario_grupo');
    const Usuario_clase = require('./Usuario_clase');

    Usuario.hasMany(Grupo, { foreignKey: 'usuarioId'});
    Grupo.belongsTo(Usuario, { foreignKey: 'usuarioId'});

    Materia.hasMany(Grupo, {foreignKey: 'materiaId'});
    Grupo.belongsTo(Materia, {foreignKey: 'materiaId'});

    Lista.hasMany(Grupo, {foreignKey: 'listaId'});
    Grupo.belongsTo(Lista, {foreignKey: 'listaId'});

    TipoUsuario.hasMany(Usuario, { foreignKey: 'tipoId'});
    Usuario.belongsTo(TipoUsuario, { foreignKey: 'tipoId'});

    Grupo.hasMany(Clase, { foreignKey: 'grupoId'});
    Clase.belongsTo(Grupo, { foreignKey: 'grupoId'});

    Usuario.hasMany(Grupo, { foreignKey: 'usuarioId'} )
    Grupo.belongsTo(Usuario, { foreignKey: 'usuarioId'});

    Usuario.hasMany(Usuario_lista, {foreignKey: 'usuarioId'});
    Usuario_lista.belongsTo(Usuario, {foreignKey: 'usuarioId'});

    Lista.hasMany(Usuario_lista, {foreignKey: 'listaId'});
    Usuario_lista.belongsTo(Lista, {foreignKey: 'listaId'});

    Grupo.hasMany(Horario_grupo, {foreignKey: 'grupoId'});
    Horario_grupo.belongsTo(Grupo, {foreignKey: 'grupoId'});

    Horario.hasMany(Horario_grupo, {foreignKey: 'horarioId'});
    Horario_grupo.belongsTo(Horario, {foreignKey: 'horarioId'});

    Usuario.hasMany(Usuario_clase, {foreignKey: 'usuarioId'});
    Usuario_clase.belongsTo(Usuario, {foreignKey: 'usuarioId'});
    
    Clase.hasMany(Usuario_clase, {foreignKey: 'claseId'});
    Usuario_clase.belongsTo(Clase, {foreignKey: 'claseId'});

    Horario.hasMany(Clase, {foreignKey: 'horarioId'});
    Clase.belongsTo(Horario, {foreignKey: 'horarioId'});


    const errHandler = (err) => {
        console.error("Error: ", err);
    };
    var datoPrueba = false;
    if(datoPrueba){
        const tipoProfesor = await TipoUsuario.create({
            tipo: "profesor"
        });        
        const tipoEstudiante = await TipoUsuario.create({
            tipo: "estudiante"
        });
        const usuario = await Usuario.create({
            tipoId: tipoProfesor.id,
            nombre: "Johan David Robles Lozano",
            password: '123',
            codigo: null,
            documento: 123,
            email: "johanrobles@hotmail.com"
        }).catch(errHandler);

        const usuario1 = await Usuario.create({
            tipoId: tipoEstudiante.id,
            nombre: "Carlos Miguel Campo Navarro",
            password: '1234',
            codigo: 1234,
            documento: 1076089044,
            email: "ccampo@gmail.com"
        }).catch(errHandler);

        const lista = await Lista.create({});

        const usuario_lista = await Usuario_lista.create({
            usuarioId: usuario1.id,
            listaId: lista.id
        });

        const materia = await Materia.create({
            nombre: "Arquitectura de software",
            creditos: 4
        });

        const horario = await Horario.create({
            dia: 6,
            horaInicial: "07:00:00",
            horaFinal: "11:00:00",
            salon: "Modelado y simulacion"
        });

        const grupo = await Grupo.create({
            materiaId: materia.id,
            usuarioId: usuario.id,
            listaId: lista.id,
            numero: 1
        });
        
        const horario_grupo = await Horario_grupo.create({
            grupoId: grupo.id,
            horarioId: horario.id
        });

        const clase = await Clase.create({
            grupoId: grupo.id,
            tema: "Como hacer documentación.",
            fecha: "2019-08-11",
            observaciones: "",
            horarioId: horario.id
        }).catch(errHandler);
    }
};
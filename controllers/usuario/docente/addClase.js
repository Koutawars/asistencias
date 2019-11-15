var Grupo = require('../../../models/Grupo');
var Clase = require('../../../models/Clase');
var Materia = require('../../../models/Materia');
var Usuario = require('../../../models/Usuario');
var Lista = require('../../../models/Lista');
var Usuario_lista = require('../../../models/Usuario_lista');
const {enviarEmail} = require('../../../config/email');
var Sequelize = require('sequelize');
const qrcode = require('qrcode');


var addClases = async (req, res) => {
    var usuarioId = req.tokenInfo.id;
    var grupoId = req.params.id;
    var tema = req.body.tema;
    var fecha = req.body.fecha;
    var observaciones = req.body.observaciones;
    var horarioId = req.body.horarioId;
    const Op = Sequelize.Op;
    const miGrupo = await Grupo.findOne({
        where: {
            [Op.and]:[{
                usuarioId
            },{
                id: grupoId
            }]
        }
    });

    var clase;
    if(miGrupo){
        clase = await Clase.create({
            grupoId,
            tema,
            fecha,
            observaciones,
            horarioId
        }).catch(err => {
            console.error(err);
        })
        var estudiantes = await Usuario.findAll({
            include: [{
                model:Usuario_lista,
                required: true,
                ttributes:[],
                include: [{
                    model: Lista,
                    ttributes:[],
                    include: [{
                        model: Grupo,
                        ttributes:[],
                        where: {
                            id: grupoId
                        }
                    }]
                }]
            }]
        })
        var image;
        estudiantes.forEach(async e => {
            image = await qrcode.toDataURL(clase.dataValues.id + ' ' + e.dataValues.id);
            enviarEmail(e.dataValues.email, image, clase.dataValues.id);
        })
        res.json({clase});
    }else{
        res.status(401).send({
            error: "Es necesario el token de autenticación"
        })
        return;
    }
}

module.exports = addClases;
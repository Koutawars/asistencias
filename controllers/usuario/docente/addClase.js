var Grupo = require('../../../models/Grupo');
var Clase = require('../../../models/Clase');
var Materia = require('../../../models/Materia');
var Sequelize = require('sequelize');

var addClases = async (req, res) => {
    var usuarioId = req.tokenInfo.id;
    var grupoId = req.params.id;
    var tema = req.body.tema;
    var fecha = req.body.fecha;
    var observaciones = req.body.observaciones;
    const Op = Sequelize.Op;
    /*
        {
            "tema": "Hola este un tema",
            "fecha": "2019-07-11",
            "observaciones": "Este es una observación"
        }
    */
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
            observaciones
        }).catch(err => {
            console.error(err);
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
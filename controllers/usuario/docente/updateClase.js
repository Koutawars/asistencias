var Grupo = require('../../../models/Grupo');
var Clase = require('../../../models/Clase');
var Materia = require('../../../models/Materia');
var Sequelize = require('sequelize');

var updateClase = async (req, res) => {
    var usuarioId = req.tokenInfo.id;
    var grupoId = req.params.id;
    var tema = req.body.tema;
    var fecha = req.body.fecha;
    var observaciones = req.body.observaciones;
    var horarioId = req.body.horarioId;
    const Op = Sequelize.Op;
    /*
        EJEMPLO JSON por POST
        {
            "tema": "Hola este un tema",
            "fecha": "2019-07-11",
            "observaciones": "Este es una observación"
        }
    */
    clase = await Clase.create({
        grupoId,
        tema,
        fecha,
        observaciones,
        horarioId
    }).catch(err => {
        console.error(err);
    })
    res.json({clase});
}

module.exports = updateClase;
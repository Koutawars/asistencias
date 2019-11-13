var Grupo = require('../../../models/Grupo');
var Clase = require('../../../models/Clase');
var Horario = require('../../../models/Horario');
var Sequelize = require('sequelize');

var getClases = async (req, res) => {
    var usuarioId = req.tokenInfo.id;
    var grupoId = req.params.id;
    const Op = Sequelize.Op;
    const clase = await Clase.findAll({
        include: [{
            model: Grupo,
            where: {
                id: grupoId
            }
        }],
        include: [{
            model: Horario
        }]
    }).catch(err => {
        console.error(err);
    })
    res.json({clase});
}

module.exports = getClases;
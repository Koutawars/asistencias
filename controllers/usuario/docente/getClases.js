var Usuario = require('../../../models/Usuario');
var Grupo = require('../../../models/Grupo');
var Clase = require('../../../models/Clase');
var Materia = require('../../../models/Materia');
var Sequelize = require('sequelize');

var getClases = async (req, res) => {
    var usuarioId = req.tokenInfo.id;
    var materiaId = req.params.id;
    var grupoId = req.params.grupoId;
    const Op = Sequelize.Op;
    const clase = await Clase.findAll({
        include: [{
            model: Grupo,
            where: {
                [Op.and]: [{
                    id:grupoId
                },{
                    usuarioId
                }]
            },
            include: [{
                attributes:[],
                model: Materia,
                where: {
                    id:materiaId
                }
            }]
        }
    ] 
    }).catch(err => {
        console.error(err);
    })
    res.json({clase});
}

module.exports = getClases;
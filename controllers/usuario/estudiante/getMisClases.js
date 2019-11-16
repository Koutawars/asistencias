var Grupo = require('../../../models/Grupo');
var Materia = require('../../../models/Materia');
var Lista = require('../../../models/Lista');
var Clase = require('../../../models/Clase');
var Usuario_lista = require('../../../models/Usuario_lista');
var Usuario_clase = require('../../../models/Usuario_clase');

var getMisClases = async (req, res) => {
    var grupoId = req.params.id;
    var usuarioId = req.tokenInfo.id;
    var clases = await Clase.findAll({
        include: [{
            model: Grupo,
            required: true,
            attributes:[],
            where: {
                id: grupoId
            },
            include: [{
                model: Lista,
                include: [{
                    model: Usuario_lista,
                    required: true,
                    attributes:[],
                    where: {
                        usuarioId
                    }
                }]
            }]
        }]
    })
    .catch(err => {
        console.error(err);
    });
    res.json({clases});
}


module.exports = getMisClases;
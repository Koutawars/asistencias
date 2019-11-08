var Grupo = require('../../../models/Grupo');
var Materia = require('../../../models/Materia');
var Lista = require('../../../models/Lista');
var Usuario_lista = require('../../../models/Usuario_lista');


var getMateria = async (req, res) => {
    var usuarioId = req.tokenInfo.id;
    var materias = await Materia.findAll({
        group: ['id'],
        include: [{
            model: Grupo,
            required: true,
            include: [{
                model: Lista,
                required: true,
                attributes:[],
                include:[{
                    model:Usuario_lista,
                    attributes:[],
                    required: true,
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
    res.json({materias});
}

module.exports = getMateria;
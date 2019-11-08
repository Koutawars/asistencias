var Grupo = require('../../../models/Grupo');
var Lista = require('../../../models/Lista');
var Usuario_lista = require('../../../models/Usuario_lista');
var Clase = require('../../../models/Clase');


var getClases = async (req, res) => {
    var grupoId = req.params.id;
    var usuarioId = req.tokenInfo.id;
    var numClases = await Clase.count({
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
    res.json({numClases});
}

module.exports = getClases;
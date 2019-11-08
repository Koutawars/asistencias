var Grupo = require('../../../models/Grupo');
var Lista = require('../../../models/Lista');
var Usuario_clase = require('../../../models/Usuario_clase');
var Clase = require('../../../models/Clase');
const Sequelize = require('sequelize');


var getMiClases = async (req, res) => {
    var claseId = req.params.id;
    var usuarioId = req.tokenInfo.id;
    const Op = Sequelize.Op 
    var numMiClases = await Clase.count({
        include: [{
            model: Usuario_clase,
            where: {
                [Op.and]:[{
                    usuarioId,
                    claseId
                }]
            }
        }]
    })
    .catch(err => {
        console.error(err);
    });
    res.json({numMiClases});
}

module.exports = getMiClases;
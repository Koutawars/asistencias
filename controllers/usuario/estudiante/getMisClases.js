var Usuario_clase = require('../../../models/Usuario_clase');
var Clase = require('../../../models/Clase');
const Sequelize = require('sequelize');

var getMisClases = async (req, res) => {
    var grupoId = req.params.id;
    var usuarioId = req.tokenInfo.id;
    const Op = Sequelize.Op 
    var clases = await Clase.findAll({
        include: [{
            model: Usuario_clase,
            where: {
                usuarioId
            },              
            attributes:[]
        }],
        where: {
            grupoId
        }
    })
    .catch(err => {
        console.error(err);
    });
    res.json({clases});
}

module.exports = getMisClases;
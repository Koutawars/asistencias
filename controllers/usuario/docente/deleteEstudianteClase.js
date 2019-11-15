var Clase = require('../../../models/Clase');
var Usuario_clase = require('../../../models/Usuario_clase');
var Sequelize = require('sequelize');

var deleteEstudianteClase = async (req, res) => {
    var claseId = req.params.id;
    var estudianteId = req.params.idEstudiante;
    const Op = Sequelize.Op;
    const usuario_clase = await Usuario_clase.destroy({
        where: {
            [Op.and]:[{
                usuarioId: estudianteId,
            },{
                claseId
            }]
        }
    }).catch(err => {
        console.error(err);
    })
    res.json({usuario_clase});
}

module.exports = deleteEstudianteClase;
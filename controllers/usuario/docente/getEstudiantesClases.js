var Usuario = require('../../../models/Usuario');
var Usuario_clase = require('../../../models/Usuario_clase');
var Clase = require('../../../models/Clase');


var getEstudiantesClases = async (req, res) => {
    var claseId = req.params.id;
    const estudiantes = await Usuario.findAll({
        attributes:['id', 'nombre', 'codigo'],
        include: [{
            model: Usuario_clase,
            required: true,
            attributes:[],
            where: {
                claseId
            }
        }]
    }).catch(err => {
        console.error(err);
    })
    res.json({estudiantes});
}

module.exports = getEstudiantesClases;
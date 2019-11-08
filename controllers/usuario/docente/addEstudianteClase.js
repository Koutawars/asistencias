var Usuario_clase = require('../../../models/Usuario_clase');

var addEstudianteClase = async (req, res) => {
    var claseId = req.params.id;
    var estudianteId = req.params.idEstudiante;
    const usuario_clase = await Usuario_clase.create({
        usuarioId: estudianteId,
        claseId
    }).catch(err => {
        console.error(err);
    })
    res.json({usuario_clase});
}

module.exports = addEstudianteClase;
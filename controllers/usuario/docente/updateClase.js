var Clase = require('../../../models/Clase');

var updateClase = async (req, res) => {
    var usuarioId = req.tokenInfo.id;
    var grupoId = req.params.id;
    var claseId = req.params.claseId;
    var tema = req.body.tema;
    var fecha = req.body.fecha;
    var observaciones = req.body.observaciones;
    var horarioId = req.body.horarioId;
    
    var clase = Clase.update(
        { 
            grupoId,
            tema,
            fecha,
            observaciones,
            horarioId
        },
        { 
            where: {
                id: claseId
            } 
        }
    ).catch(err => {
        console.error(err);
    })
    res.json({clase});
}

module.exports = updateClase;
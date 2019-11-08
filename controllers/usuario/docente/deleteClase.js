var Clase = require('../../../models/Clase');
var Usuario_clase = require('../../../models/Usuario_clase');

var deleteClase = async (req, res) => {
    var claseId = req.params.id;

    Usuario_clase.destroy({
        where: {
            claseId
        }
    });

    const clase = await Clase.destroy({
        where: {
            id:claseId
        }
    }).catch(err => {
        console.error(err);
    })
    res.json({clase});
}

module.exports = deleteClase;
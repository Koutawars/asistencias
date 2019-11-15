var Clase = require('../../../models/Clase');
var Usuario_clase = require('../../../models/Usuario_clase');

var deleteClase = async (req, res) => {
    var claseId = req.params.id;
    
    var usuarios = Usuario_clase.findAll({
        where: {
            claseId
        }
    })

    if(usuarios.length == 0){
        const clase = await Clase.destroy({
            where: {
                id:claseId
            }
        }).catch(err => {
            console.error(err);
        })
        res.json({clase});
    }else{
        res.status(400);
        res.json({ error: 'Hay estudiantes que han asistido en esta clase' });
    }
}

module.exports = deleteClase;
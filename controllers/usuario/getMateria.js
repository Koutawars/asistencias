var Usuario = require('../../models/Usuario');
var Grupo = require('../../models/Grupo');
var Materia = require('../../models/Materia');


var getMateria = async (req, res) => {
    var usuarioId = req.tokenInfo.id;
    const materias = await Materia.findAll({
        include: [
            {
                model: Grupo,
                include: [{
                    model: Usuario,
                    where: {
                        id: usuarioId
                    }
                }] 
            }
        ]
    }).catch(err => {
        console.error(err);
    })
    res.json({materias});
}

module.exports = getMateria;
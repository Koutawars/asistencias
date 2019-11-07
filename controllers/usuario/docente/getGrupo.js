var Usuario = require('../../../models/Usuario');
var Grupo = require('../../../models/Grupo');
var Horario = require('../../../models/Horario');

var getGrupo = async (req, res) => {
    var usuarioId = req.tokenInfo.id;
    var materiaId = req.params.id;
    const grupo = await Grupo.findAll({
        where: {
            materiaId
        },
        include: [{
            attributes:[],
            model: Usuario,
            where: {
                id: usuarioId
            }
        },{
            model: Horario
        }
    ] 
    }).catch(err => {
        console.error(err);
    })
    res.json({grupo});
}

module.exports = getGrupo;
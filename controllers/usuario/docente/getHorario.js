var Grupo = require('../../../models/Grupo');
var Horario = require('../../../models/Horario');
var Horario_grupo = require('../../../models/horario_grupo');


var getHorario = async (req, res) => {
    var grupoId = req.params.id;
    const horarios = await Horario.findAll({
        include: [
            {
                model: Horario_grupo,                
                attributes:[],
                where: {
                    grupoId
                }
            }
        ]
    }).catch(err => {
        console.error(err);
    })
    res.json({horarios});
}

module.exports = getHorario;
var Grupo = require('../../../models/Grupo');
var Clase = require('../../../models/Clase');
var Horario = require('../../../models/Horario');
var getClaseshechas = async (req, res) => {
    var grupoId = req.params.id;
    var usuarioId = req.tokenInfo.id;
    var clases = await Clase.findAll({
        include: [{
            model: Grupo,
            where: {
                id:grupoId
            },              
            attributes:[]
        },{
            model: Horario
        }]
    })
    .catch(err => {
        console.error(err);
    });
    res.json({clases});
}


module.exports = getClaseshechas;
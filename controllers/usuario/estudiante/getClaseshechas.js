var Grupo = require('../../../models/Grupo');
var Clase = require('../../../models/Clase');
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
        }]
    })
    .catch(err => {
        console.error(err);
    });
    res.json({clases});
}


module.exports = getClaseshechas;
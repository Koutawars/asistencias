var Usuario = require('../../../models/Usuario');
var Usuario_lista = require('../../../models/Usuario_lista');
var Grupo = require('../../../models/Grupo');
var Lista = require('../../../models/Lista');


var getEstudiantes = async (req, res) => {
    var grupoId = req.params.id;
    const estudiantes = await Usuario.findAll({
        attributes:['id', 'nombre', 'codigo'],
        include: [{
            model: Usuario_lista,
            required: true,
            attributes:[],
            include: [{
                model: Lista,
                attributes:[],
                include: [{
                    model: Grupo,
                    attributes:[],
                    where: {
                        id: grupoId
                    }
                }]
            }]
        }]
    }).catch(err => {
        console.error(err);
    })
    res.json({estudiantes});
}

module.exports = getEstudiantes;
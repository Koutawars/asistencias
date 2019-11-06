var Usuario = require('../../models/Usuario');

var getUser = async (req, res) => {
    var usuarioId = req.tokenInfo.id;
    const usuario = await Usuario.findOne({
        where: {
            id: usuarioId
        }
    });
    res.json({usuario});
}

module.exports = getUser;
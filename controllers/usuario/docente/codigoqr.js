var Grupo = require('../../../models/Grupo');
var Clase = require('../../../models/Clase');
var Usuario_clase = require('../../../models/Usuario_clase');
var Sequelize = require('sequelize');
const QRReader = require('qrcode-reader');
const Jimp = require('jimp');



var codigoqr = async (req, res) => {
    var usuarioId = req.tokenInfo.id;
    var imagen = await Jimp.read( Buffer.from(req.body.imagen, 'base64'));
    const qr = new QRReader();
    const value = await new Promise((resolve, reject) => {
        qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
        qr.decode(imagen.bitmap);
    });

    var result = value.result.split(" ");
    var claseId = result[0];
    var estudianteId = result[1];

    const Op = Sequelize.Op;

    const usuarios = await Usuario_clase.findOne({
        where: {
            [Op.and]: [
                {usuarioId: estudianteId}, {claseId}
            ]
        }
    });
    if(!usuarios.dataValues.id){
        const usuario_clase = await Usuario_clase.create({
            usuarioId: estudianteId,
            claseId
        }).catch(err => {
            console.error(err);
        })
        res.json({usuario_clase});
    }
    res.json({});
}

module.exports = codigoqr;
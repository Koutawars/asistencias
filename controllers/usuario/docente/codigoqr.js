var Grupo = require('../../../models/Grupo');
var Clase = require('../../../models/Clase');
var Usuario_clase = require('../../../models/Usuario_clase');
var Sequelize = require('sequelize');
const QRReader = require('qrcode-reader');
const Jimp = require('jimp');
const Usuario = require('../../../models/Usuario');



var codigoqr = async (req, res) => {
    var usuarioId = req.tokenInfo.id;
    var base64Image = req.body.imagen.split("data:image/png;base64,")[1];
    var imagen = await Jimp.read( Buffer.from(base64Image, 'base64'))
    .catch(err => {
        console.log(err);
    })
    var error = false;
    const qr = new QRReader();
    const value = await new Promise((resolve, reject) => {
        qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
        qr.decode(imagen.bitmap);
    }).catch(err=> {
        res.json({});
        error = true;
    })
    if(!error){
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
        if(!usuarios){
            const estu = await Usuario.findOne({
                where: {
                    id: estudianteId
                }
            })
            const usuario_clase = await Usuario_clase.create({
                usuarioId: estudianteId,
                claseId
            }).catch(err => {
                console.error(err);
            })
            res.json({usuario_clase, usuario:estu});
        }else{
            res.code(400);
        }
    }
}

module.exports = codigoqr;
var jwt = require('jsonwebtoken');
var Sequelize = require('sequelize');

const Usuario = require('../../models/Usuario');
const Op = Sequelize.Op;
var login = async (req, res) => {

    // req.body
    var usuario = req.body.usuario;
    var password = req.body.password;
    // acá estaría la conexión a la base de datos...
    var buscado;
    //consulta para sacar
    try {
      buscado = await Usuario.findOne({
        where: {
          [Op.and]:[
            {
              [Op.or]:[
                {
                  documento: usuario
                },
                {
                  codigo: usuario
                }
              ]
            },
            {
              password: password
            }
          ]
        }
        })
    }catch(err){
        console.error("Error: ", err);
    }
    //en caso de no encontrar
    if(!buscado){
      res.status(401).send({
        error: 'Usuario o contraseña inválidos'
      })
      return
    }
    var tokenData = {
        id: buscado.id,
        nombre: buscado.nombre,
        tipoId: buscado.tipoId,
        usuario: usuario
        // MAS DATOS...
    }
    //crea el token
    var token = jwt.sign(tokenData, 'Contraseña secreta', {
        expiresIn: 60 * 60 * 24 //expira en 24 hora
     })
    res.json({ jwt: token});
};

module.exports = login;
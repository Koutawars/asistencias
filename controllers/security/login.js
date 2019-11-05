
var jwt = require('jsonwebtoken');
var login = (req, res) => {
    // req.body
    var usuario = req.body.usuario;
    var password = req.body.password;
    // acá estaría la conexión a la base de datos...
    if( !(usuario === 'admin' && password === 'admin')){
      res.status(401).send({
        error: 'Usuario o contraseña inválidos'
      })
      return
    }
    var tokenData = {
        usuario: usuario
        // MAS DATOS...
    }
    var token = jwt.sign(tokenData, 'Contraseña secreta', {
        expiresIn: 60 * 60 * 24 //expira en 24 hora
     })
    res.json({ jwt: token});
};

module.exports = login;
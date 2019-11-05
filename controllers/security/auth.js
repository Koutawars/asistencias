var jwt = require('jsonwebtoken');

// middleware
var auth = function (req, res, next) {
    var token = req.headers['authorization'];
    if(!token){
        res.status(401).send({
          error: "Es necesario el token de autenticación"
        })
        return
    }
    token = token.replace('Bearer ', '');
    jwt.verify(token, 'Contraseña secreta', function(err, info) {
      if (err) {
        res.status(401).send({
          error: 'Token inválido'
        })
      } else {
        req.tokenInfo = info;
        next();
      }
    })
};

module.exports = auth;
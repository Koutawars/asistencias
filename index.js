var express = require('express'); // Importa la libreria express
var app = express(); // ejecuta la librería
var path = require('path'); // esta librería la trae node incluida, acá se require
var body_parser = require('body-parser'); 
var cors = require('cors');
var jwt = require('jsonwebtoken')

app.use(cors());

app.set('views', path.join(__dirname ,'/views'));

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

app.use('/', express.static(path.resolve(__dirname + '/views/build/')));

// logearse prueba
app.post('/login', (req, res) => {
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
});

// conseguir autorización 
app.get('/getUser', (req, res) => {
    var token = req.headers['authorization']
    if(!token){
        res.status(401).send({
          error: "Es necesario el token de autenticación"
        })
        return
    }
    token = token.replace('Bearer ', '');
    jwt.verify(token, 'Contraseña secreta', function(err, user) {
      if (err) {
        res.status(401).send({
          error: 'Token inválido'
        })
      } else {
        res.json(user);
      }
    })
})


app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname + '/views/build/index.html'));
});
app.listen(process.env.PORT || 5000, function () {
    console.log('escuchando en '+ (process.env.PORT || 5000));
});
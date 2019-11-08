var express = require('express');
var router = express.Router();
var auth = require('./security/auth');
var login = require('./security/login');
var estudiante = require('./usuario/estudiante/estudiante');


// ruta libre, login
router.post('/login', login);
// [POST] http://localhost:5000/api/login 
// Retorna el token

// usar el middleware
router.use(auth);

// conseguir autorización 
router.post('/auth', (req, res) => {
    res.json(req.tokenInfo);
});
// [post] http://localhost:5000/api/auth 
// valida el token y retorna la información del token

// usuario API
var getUser = require('./usuario/getUser');
// docente
var docente = require('./usuario/docente/docente')

// regresar toda la información del usuario
// [get] http://localhost:5000/api/getUser 
router.get('/getUser', getUser);

// rutas del docente
router.use('/docente', docente);

// rutas del estudiante
router.use('/estudiante', estudiante);

module.exports = router;

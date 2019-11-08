var express = require('express');
var router = express.Router();
var getMateria = require('./getMateria');
var getClases = require('./getClases');
var getMiClases = require('./getMiClases');

// [GET] http://localhost:5000/api/estudiante/getMateria
router.get('/getMateria', getMateria);

// numero de clases donde id es el numero del grupo
// http://localhost:5000/api/estudiante/:id/getNumClases
router.get('/:id/getNumClases', getClases);

// numero de mis clases que he asistido donde el id es el id del grupo
router.get('/:id/getNumMiClases', getMiClases);


module.exports = router;
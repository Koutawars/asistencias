var express = require('express');
var router = express.Router();
var getMateria = require('./getMateria');
var getGrupo = require('./getGrupo');
var getClases = require('./getClases');
var addClase = require('./addClase');

// traer materias
// http://localhost:5000/api/docente/getMaterias
router.get('/getMaterias', getMateria);
// traer grupos del profesor
// http://localhost:5000/api/docente/:id/getGrupos
router.get('/:id/getGrupos', getGrupo);

router.get('/:id/:grupoId/clases', getClases);

// agregar una clase
// http://localhost:5000/api/docente/:id/addclase
router.post('/:id/addclase', addClase);

module.exports = router;

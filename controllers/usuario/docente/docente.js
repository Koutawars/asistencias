var express = require('express');
var router = express.Router();
var getMateria = require('./getMateria');
var getGrupo = require('./getGrupo');
var getClases = require('./getClases');

// traer materias
// http://localhost:5000/api/docente/getMaterias
router.get('/getMaterias', getMateria);
// traer grupos del profesor
// http://localhost:5000/api/docente/:id/getGrupos
router.get('/:id/getGrupos', getGrupo);

router.get('/:id/:grupoId/clases', getClases);

module.exports = router;

var express = require('express');
var router = express.Router();
var getMateria = require('./getMateria');
var getGrupo = require('./getGrupo');
var getClases = require('./getClases');
var addClase = require('./addClase');
var getEstudiantes = require('./getEstudiantes');
var addEstudianteClase = require('./addEstudianteClase');

// traer materias
// http://localhost:5000/api/docente/getMaterias
router.get('/getMaterias', getMateria);
// traer grupos del profesor
// http://localhost:5000/api/docente/:id/getGrupos
router.get('/:id/getGrupos', getGrupo);

router.get('/:id/:grupoId/clases', getClases);

// agregar una clase
// id = grupo
// http://localhost:5000/api/docente/:id/addclase
router.post('/:id/addclase', addClase);

// id = id del grupo
// http://localhost:5000/api/docente/:id/getEstudiantes
router.get('/:id/getEstudiantes', getEstudiantes);

// [POST] http://localhost:5000/api/docente/:id/:idEstudiante/addEstudianteClase
// id = claseId, idEstudiante = usuarioId(de un estudiante lol)
router.post('/:id/:idEstudiante/addEstudianteClase', addEstudianteClase);


module.exports = router;

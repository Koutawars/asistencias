var express = require('express');
var router = express.Router();
var getMateria = require('./getMateria');
var getGrupo = require('./getGrupo');
var getClases = require('./getClases');
var addClase = require('./addClase');
var getEstudiantes = require('./getEstudiantes');
var addEstudianteClase = require('./addEstudianteClase');
var deleteClase = require('./deleteClase');
var getHorarios = require('./getHorario');
var getEstudiantesClases = require('./getEstudiantesClases');
var codigoqr = require('./codigoqr');
var updateClase = require('./updateClase');
var deleteEstudianteClase = require('./deleteEstudianteClase');

router.post('/codigoqr', codigoqr);

// traer materias
// http://localhost:5000/api/docente/getMaterias
router.get('/getMaterias', getMateria);
// traer grupos del profesor
// http://localhost:5000/api/docente/:id/getGrupos
router.get('/:id/getGrupos', getGrupo);

// donde es el id del grupo
// http://localhost:5000/api/docente/:id/getClases
router.get('/:id/getClases', getClases);

// get horarios de un grupo
router.get('/:id/getHorarios', getHorarios);

// agregar una clase
// id = grupo
// http://localhost:5000/api/docente/:id/addclase
router.post('/:id/addclase', addClase);

// id = grupo, claseId = id de la clase
// http://localhost:5000/api/docente/:id/:claseId/updateClase
router.post('/:id/:claseId/updateClase', updateClase);

// id = id del grupo
// http://localhost:5000/api/docente/:id/getEstudiantes
router.get('/:id/getEstudiantes', getEstudiantes);

// id = id de la clase
// http://localhost:5000/api/docente/:id/getEstudiantes
router.get('/:id/getEstudiantesClases', getEstudiantesClases);

// [POST] http://localhost:5000/api/docente/:id/:idEstudiante/addEstudianteClase
// id = claseId, idEstudiante = usuarioId(de un estudiante lol)
router.post('/:id/:idEstudiante/addEstudianteClase', addEstudianteClase);

// [POST] http://localhost:5000/api/docente/:id/:idEstudiante/deleteEstudianteClase
// id = claseId, idEstudiante = usuarioId(de un estudiante lol)
router.post('/:id/:idEstudiante/deleteEstudianteClase', deleteEstudianteClase);

// ID = id de la clase que va a borrar
// http://localhost:5000/api/docente/:id/deleteClase
router.delete('/:id/deleteClase', deleteClase);

module.exports = router;

const express = require('express')
const router = express.Router()
const empleadoController = require('../controllers/empleado/empleadoController')


//Obtener todos los empleados
//router.get('/empleados',empleadoController.mostrarTodos);

//Obtener todos los empleados
router.get('/',empleadoController.getEmployes)

//Obtener un empleado
router.get('/:id',empleadoController.getEploye)

//alta empleado
router.post('/', empleadoController.generateEmploye)

//edirtar importes
router.put('/', empleadoController.editAllImports)

//edirtar importes
router.put('/:id', empleadoController.editOndeEmployeById)

// Activar/Desactivar empleado por ID
router.patch('/:id/toggle-state', empleadoController.toggleEmployeStateById)

/*
router.get('/:id', getBlog)
router.post('/', createBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)
*/

module.exports = router;
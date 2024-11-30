const express = require('express')
const router = express.Router()
const personaController = require('../controllers/persona/personaController')


//Obtener todos los empleados
//router.get('/empleados',empleadoController.mostrarTodos);

//Obtener todos los empleados
router.get('/',personaController.mostrarPorFiltro)

//alta persona
router.post('/', personaController.generatePerson)

//edirtar importes
router.put('/', personaController.editarTodosImportes)
/*
router.get('/:id', getBlog)
router.post('/', createBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)
*/

module.exports = router;
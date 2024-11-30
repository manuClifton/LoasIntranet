const express = require('express')
const router = express.Router()
const entidadController = require('../controllers/entidad/entidadController')


//Obtener todos los empleados
router.get('/',entidadController.mostrarTodos);
/*
router.get('/:id', getBlog)
router.post('/', createBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)
*/

module.exports = router;
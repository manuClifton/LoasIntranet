const express = require('express')
const router = express.Router()
const userController = require('../controllers/user/userController')



//Obtener todos los empleados
router.post('/user', userController.getUsers)

module.exports = router;

const router = require('express').Router()
const users = require('../controllers/usuario')

//Apartado usuarios
router.get('/getUsuarios', users.getUsuarios)
router.post('/guardarUsuario', users.guardarUsuario)

router.post('/validarUsuario',users.validarUsuario)

module.exports = router
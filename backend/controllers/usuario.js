const usuario = require('../models/usuario_model')
const ctrl = {}

ctrl.getUsuarios = async(req,res) => {
    //obtener de bd
    const encontrados = await usuario.find()
    console.log(encontrados);
    return res.send('yes')
}

ctrl.guardarUsuario = async(req,res)=>{
    //guardar
    const usuarioGuardado = new usuario({nombre: 'asdlkjdasklj', usuario:'ale', contrasenia:'password'})
    return res.send(usuarioGuardado)

}

ctrl.validarUsuario = async(req,res)=>{
    const {usuario, contrasenya} = req.body
    console.log(req.body);
    return res.send('miau')
}

module.exports = ctrl

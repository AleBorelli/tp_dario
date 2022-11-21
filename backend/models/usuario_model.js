const mongoose = require('mongoose')
const {Schema} = mongoose

const schema = new Schema({
    nombre: {type: String},
    usuario: {type: String},
    contrasenia: {type: String},
    tipoUsuario: {type: String},
    fecha_de_nacimiento: {type: Date},
})
const usuario = mongoose.model('usuario', schema)
module.exports = usuario

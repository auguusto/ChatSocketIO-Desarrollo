const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const esquemaMensaje = new Schema({
    mensaje: String,
    usuarioCreador: String,
    fechaCreacion: Date, 
    flagLeido: Boolean
})
const Mensaje = mongoose.model('Mensaje', esquemaMensaje)
module.exports = Mensaje
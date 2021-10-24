const mongoose = require('mongoose')
const Schema = mongoose.Schema
const esquemaConexion = new Schema({
    usuarioConectado: String,
    fechaConexion: Date,    
})
const Conexion = mongoose.model('Conexion', esquemaConexion)
module.exports = Conexion
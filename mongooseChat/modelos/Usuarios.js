const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const esquemaUsuario = new Schema ({ /*instancio la clase*/
    nombre: String,
    usuario: String,
    password: String
})
const Usuario = mongoose.model('Usuario', esquemaUsuario)
module.exports = Usuario
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UsuarioSchema = new Schema({
    nombre:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: [true, 'El email es requerido']
    },
    password:{
        type: String,
        required: [ true, 'El password es requerido' ]
    },
    fecha_creacion:{
        type: Date,
        default: Date.now()
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Usuarios', UsuarioSchema );


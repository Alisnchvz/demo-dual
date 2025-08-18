const mongoose = require('mongoose');
//const getDb= require('../util/database').getDb; (COMENTARIOO, IGNORAR)
const Schema =mongoose.Schema;

const usuarioSchema = new Schema ({
    usuario: {type: String, required: true},
    correo: {type: String, required: true},
    Direccion:{
        pais: {type: String, required:true},
        estado:{type: String, required: true},
        municipio: {type: String, required: true},
        codigo_postal: {type: Number, required: true},
        calle:{type: String, required: true},
        numero_calle: {type: Number, required: true}
    },
    contraseña: {type: String, required: true},
    productos:[{type: String, required: true}],
    encargos:[{type: String, required: true}]

}); 


module.exports=mongoose.model('Usuario', usuarioSchema);
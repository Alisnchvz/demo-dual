const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const encargoSchema = new Schema({
    alto: {type: Number, required: true},
    ancho: {type: Number, required: true},
    profundidad: {type: Number, required: true},
    color: {type: String, required: true},
    cajones:{type: Number, required: true},
    especificaciones: {type: String, required: true},
    usuario: [{type: String, required: true}]
});

module.exports= mongoose.model ('encargo', encargoSchema);
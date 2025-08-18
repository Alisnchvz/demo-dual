const mongoose =require ('mongoose');
const Schema =mongoose.Schema;

const productosSchema = new Schema({
    categoria: {type: String, required: true},
    nombre_producto: {type: String, required: true},
    atributos: {
        color: {type: String, required: true},
        alto: {type: Number, required: true},
        ancho: {type: Number, required: true},
        profundidad: {type: Number, required: true}
    },
    precio:{type: Number, required: true}
});

module.exports= mongoose.model('producto', productosSchema);
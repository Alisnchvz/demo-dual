const path = require('path');

exports.encargo = (req, res) => {
  res.sendFile(path.join(__dirname, '../encargo.html'));
};

/*exports.encDatos = (req, res) =>{
  const alto = req.body.alto;
  const ancho = req.body.ancho;
  const prof = req.body.prof;
  const color = req.body.color;
  const cajones = req.body.cajones_n;
  const esp = req.body.specs;
  
  res.send('OK!');
}*/

const encargo = require('../models/encargos'); //importar el  modelo

exports.crearEncargo = async (req, res) => {
  const {alto, ancho, profundidad,color, cajones, especificaciones,usuario }= req.body;

  try {
    const nuevoEncargo = new encargo({
      alto:Number (req.body.alto),
      ancho: Number (req.body.ancho),
      profundidad: Number (req.body.profundidad),
      color: color,
      cajones: Number (req.body.cajones),
      especificaciones: especificaciones,
    }); 

    console.log("Datos recibidos:", req.body);
    await nuevoEncargo.save(); // Guarda en MongoDB

    res.send(' Encargo registrado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al registrar el encargo');
  }
};

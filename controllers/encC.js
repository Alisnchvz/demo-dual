const path = require('path');

exports.encargo = (req, res) => {
  res.sendFile(path.join(__dirname, '../encargo.html'));
};

exports.encDatos = (req, res) =>{
  const alto = req.body.alto;
  const ancho = req.body.ancho;
  const prof = req.body.prof;
  const color = req.body.color;
  const cajones = req.body.cajones_n;
  const esp = req.body.specs;
  
  res.send('OK!');
}
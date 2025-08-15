const path = require('path');

exports.login = (req, res) => {
  res.sendFile(path.join(__dirname, '../login.html'));
};

exports.logindatos = (req, res) => {
  const usuario = req.body.Usuario;
  const email =req.body.email;
  const pais = req.body.Pais;
  const estado = req.body.est;
  const municipio = req.body.mun;
  const cp = req.body.CodigoPostal;
  const  contraseña = req.body.password;

  res.send('ok!');
}
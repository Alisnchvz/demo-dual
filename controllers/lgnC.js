const path = require('path');
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  res.sendFile(path.join(__dirname, '../login.html'));
};

/*exports.logindatos = (req, res) => {
  const usuario = req.body.usuario;
  const correo =req.body.correo;
  const pais = req.body.pais;
  const estado = req.body.estado;
  const municipio = req.body.municipio;
  const cp = req.body.codigo_postal;
  const calle =req.body.calle;
  const numero_calle = req.body.numero_calle;
  const  contraseña = req.body.contraseña;

  res.send('ok!');
}*/

const Usuario = require('../models/usuario'); //importacion del modelo

exports.registrarUsuario = async (req, res) => {
  const { usuario, correo, pais, estado, municipio, codigo_postal, calle, numero_calle,contraseña, productos, encargos } = req.body;

  try {
    const nuevoUsuario = new Usuario({
      usuario,
      correo,
      Direccion: {
        pais: pais,
        estado: estado,
        municipio: municipio,
        codigo_postal: codigo_postal,
        calle: calle,
        numero_calle: numero_calle
      },
      contraseña: contraseña,
      productos: productos,
      encargos: encargos
    });
    console.log("Datos recibidos:", req.body);
    await nuevoUsuario.save(); // Para guardar en MongoDB

    res.send(' Usuario registrado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al registrar');
  }
};

//para autenticacion:
const { generarToken } = require('../util/token');

exports.autenticacion = async (req, res) => {
  const { correo } = req.body;

  try {
    // Se busca el usuario por correo
    const user = await Usuario.findOne({ correo });

    if (!user) {
      return res.status(401).json({ mensaje: "Correo no registrado" });
    }

    if (user.contraseña !== contraseña) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }

    const token = generarToken(user);

    res.json({
      mensaje: "Login exitoso",
      token: token,          
      usuario: {
        id: user._id,
        correo: user.correo
      }
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error en el servidor", error });
  }
};
const path = require('path');
const jwt = require("jsonwebtoken");
const usuario = require('../models/usuario');

exports.signIn = (req, res) => {
  res.sendFile(path.join(__dirname, '../signIn.html'));
};

const { generarToken } = require('../util/token');
exports.autenticacion = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    // Buscar usuario en la BD
    const user = await usuario.findOne({ correo });

    if (!user) {
      return res.status(404).json({ mensaje: "El correo no está registrado" });
    }

    const token = jwt.sign(
      { id: user._id, correo: user.correo },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({
      mensaje: "Login exitoso",
      token,
      usuario: { id: user._id, correo: user.correo }
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error en login", error });
  }
};
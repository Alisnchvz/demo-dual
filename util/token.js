const jwt = require("jsonwebtoken");

// Estas variables estan en .env
const JWT_SECRET = process.env.JWT_SECRET || "080814cjta";
const JWT_EXPIRES_IN = "24h"; // duración del token

exports.generarToken = (usuario) => {
  const payload = {
    sub: usuario._id.toString(), 
    correo: usuario.correo       
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};
//se valida el token
exports.validarToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
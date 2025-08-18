const { validarToken } = require('../util/token');

exports.protegerRuta = (req, res, next) => {
  // Se toma token desde headers
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ mensaje: "No has iniciado sesión" });
  }

  // El header debe ser "Bearer <token>"
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ mensaje: "Token faltante" });
  }

  try {
    // Validacion del token
    const decoded = validarToken(token);

    // Se guardan los datos en "req.usuario"
    req.usuario = {
      id: decoded.sub,       
      correo: decoded.correo
    };

    next(); //sigue en el controlador...
  } catch (err) {
    return res.status(401).json({ mensaje: "Token inválido o expirado" });
  }
};
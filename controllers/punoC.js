const path = require('path');

exports.pueUno = (req, res) => {
  res.sendFile(path.join(__dirname, '../P_u.html'));
};
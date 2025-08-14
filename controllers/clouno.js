const path = require('path');

exports.cloUno = (req, res) => {
  res.sendFile(path.join(__dirname, '../clo_u.html'));
};
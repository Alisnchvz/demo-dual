const path = require('path');

exports.coUno = (req, res) => {
  res.sendFile(path.join(__dirname, '../Co_u.html'));
};
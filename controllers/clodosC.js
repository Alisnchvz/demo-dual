const path = require('path');

exports.cloDos = (req, res) => {
  res.sendFile(path.join(__dirname, '../Clo_d.html'));
};
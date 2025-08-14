const path = require('path');

exports.catePuertas = (req, res) => {
  res.sendFile(path.join(__dirname, '../cate_puertas.html'));
};
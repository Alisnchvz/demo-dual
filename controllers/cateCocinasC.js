const path = require('path');

exports.cateCocinas = (req, res) => {
  res.sendFile(path.join(__dirname, '../cate_cocina.html'));
};
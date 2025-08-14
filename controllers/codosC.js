const path = require('path');

exports.coDos = (req, res) => {
  res.sendFile(path.join(__dirname, '../Co_d.html'));
};
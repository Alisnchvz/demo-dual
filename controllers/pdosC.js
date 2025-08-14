const path = require('path');

exports.pueDos = (req, res) => {
  res.sendFile(path.join(__dirname, '../P_d.html'));
};
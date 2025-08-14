const path = require('path');

exports.encargo = (req, res) => {
  res.sendFile(path.join(__dirname, '../encargo.html'));
};
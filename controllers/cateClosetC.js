const path = require('path');

exports.cateClosets = (req, res) => {
  res.sendFile(path.join(__dirname, '../cate_closets.html'));
};
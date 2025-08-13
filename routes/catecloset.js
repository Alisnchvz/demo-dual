const path = require('path');

const express = require('express');
const router =express.Router();

router.get('/cateclosets',(req, res, next) =>{
    res.sendFile(path.join(__dirname, '../cate_closets.html' ));
});

module.exports= router;
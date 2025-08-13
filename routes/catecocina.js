const path = require('path');

const express = require('express');
const router =express.Router();

router.get('/catecocina',(req, res, next) =>{
    res.sendFile(path.join(__dirname, '../cate_cocina.html' ));
});

module.exports= router;
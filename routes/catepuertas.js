const path = require('path');

const express = require('express');
const router =express.Router();

router.get('/catepuertas',(req, res, next) =>{
    res.sendFile(path.join(__dirname, '../cate_puertas.html' ));
});

module.exports= router;
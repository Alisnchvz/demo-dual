const path = require('path');

const express = require('express');
const router =express.Router();

router.get('/CocDos',(req, res, next) =>{
    res.sendFile(path.join(__dirname, '../Co_d.html' ));
});

module.exports= router;
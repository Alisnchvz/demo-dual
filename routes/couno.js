const path = require('path');

const express = require('express');
const router =express.Router();

router.get('/CocUno',(req, res, next) =>{
    res.sendFile(path.join(__dirname, '../Co_u.html' ));
});

module.exports= router;
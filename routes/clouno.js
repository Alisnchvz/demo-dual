const path = require('path');

const express = require('express');
const router =express.Router();

router.get('/CloUno',(req, res, next) =>{
    res.sendFile(path.join(__dirname, '../clo_u.html' ));
});

module.exports= router;
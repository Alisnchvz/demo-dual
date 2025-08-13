const path = require('path');

const express = require('express');
const router =express.Router();

router.get('/PueUno',(req, res, next) =>{
    res.sendFile(path.join(__dirname, '../P_u.html' ));
});

module.exports= router;
const path = require('path');

const express = require('express');
const router =express.Router();

router.get('/PueDos',(req, res, next) =>{
    res.sendFile(path.join(__dirname, '../P_d.html' ));
});

module.exports= router;
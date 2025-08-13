const path = require('path');

const express = require('express');
const router =express.Router();

router.get('/enc',(req, res, next) =>{
    res.sendFile(path.join(__dirname, '../encargo.html' ));
});

module.exports= router;
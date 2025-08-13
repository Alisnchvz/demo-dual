const path = require('path');

const express = require('express');
const router =express.Router();

router.get('/CloDos',(req, res, next) =>{
    res.sendFile(path.join(__dirname, '../Clo_d.html' ));
});

module.exports= router;
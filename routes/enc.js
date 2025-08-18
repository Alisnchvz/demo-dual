const path = require('path');

const express = require('express');
const router =express.Router();

const encController =require('../controllers/encC');

router.get('/enc',encController.encargo);
//router.get('/enc',encController.encDatos);
router.post('/crearEncargo', encController.crearEncargo);

module.exports= router;
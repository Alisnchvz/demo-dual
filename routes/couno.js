const path = require('path');

const express = require('express');
const router =express.Router();

const coUnoController = require('../controllers/counoC');

router.get('/CocUno',coUnoController.coUno);

module.exports= router;
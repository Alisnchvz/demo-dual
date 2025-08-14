const path = require('path');

const express = require('express');
const router =express.Router();

const cloUnoController = require('../controllers/clouno');

router.get('/CloUno',cloUnoController.cloUno);

module.exports= router;
const path = require('path');

const express = require('express');
const router =express.Router();

const pueunoController = require('../controllers/punoC');

router.get('/PueUno',pueunoController.pueUno);

module.exports= router;
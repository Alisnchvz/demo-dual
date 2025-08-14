const path = require('path');

const express = require('express');
const router =express.Router();

const pueDosController = require('../controllers/pdosC');

router.get('/PueDos',pueDosController.pueDos);

module.exports= router;
const path = require('path');

const express = require('express');
const router =express.Router();

const cateCocController = require('../controllers/cateCocinasC');

router.get('/catecocina',cateCocController.cateCocinas);

module.exports= router;
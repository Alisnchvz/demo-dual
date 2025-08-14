const path = require('path');

const express = require('express');
const router =express.Router();

const encController =require('../controllers/encC');

router.get('/enc',encController.encargo);

module.exports= router;
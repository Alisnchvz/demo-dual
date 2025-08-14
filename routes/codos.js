const path = require('path');

const express = require('express');
const router =express.Router();

const coDosController = require('../controllers/codosC');

router.get('/CocDos',coDosController.coDos);

module.exports= router;
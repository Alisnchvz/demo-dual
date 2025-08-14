const path = require('path');

const express = require('express');
const router =express.Router();

const cloDosController =require('../controllers/clodosC');

router.get('/CloDos',cloDosController.cloDos);

module.exports= router;
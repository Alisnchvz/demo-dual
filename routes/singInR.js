const path = require('path');

const express = require('express');
const router =express.Router();

const signInController = require('../controllers/singInC');

router.get('/signIn', signInController.signIn);
router.post('/autenticacion',signInController.autenticacion);

module.exports= router;
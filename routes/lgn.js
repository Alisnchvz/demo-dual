const path = require('path');

const express = require('express');
const router =express.Router();

const lgnController = require('../controllers/lgnC');

router.get('/login',lgnController.login);
//router.post('/logindata',lgnController.logindatos);
router.post('/registro',lgnController.registrarUsuario);
router.post('/autenticacion', lgnController.autenticacion);

module.exports= router;
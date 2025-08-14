const path = require('path');

const express = require('express');
const router =express.Router();

const lgnController = require('../controllers/lgnC');

router.get('/login',lgnController.login);

module.exports= router;
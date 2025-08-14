const path = require('path');

const express = require('express');
const router =express.Router();

const catePueController =require('../controllers/catePuertasC');

router.get('/catepuertas',catePueController.catePuertas);

module.exports= router;
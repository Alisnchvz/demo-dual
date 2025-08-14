const path = require('path');

const express = require('express');
const router =express.Router();

const cateCloController =  require('../controllers/cateClosetC');

router.get('/cateclosets',cateCloController.cateClosets);

module.exports= router;
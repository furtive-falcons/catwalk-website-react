const express = require('express');
const qaController = require('../controllers/qaController.js');

const router = express.Router();

router.get('/', qaController.getQA);

module.exports = router;

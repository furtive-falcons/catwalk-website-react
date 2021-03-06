const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/:id', productController.getProductInformation);

module.exports = router;

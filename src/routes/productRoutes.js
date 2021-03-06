const express = require('express');
const productController = require('../controllers/productController')
const relatedController = require('../controllers/relatedController')

const router = express.Router();

router.get('/:id' , productController.getProductInformation)

router.get('/:id/related', relatedController.getRelatedProducts)

module.exports = router;
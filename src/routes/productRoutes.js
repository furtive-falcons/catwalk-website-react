const express = require('express');
const productController = require('../controllers/productController')

const router = express.Router();

router.get('/:id' , productController.getProductInformation)

router.get('/:id/related', productController.getRelatedProducts)

module.exports = router;
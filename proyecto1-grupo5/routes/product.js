const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/product', productController.listaProductos);



module.exports = router;


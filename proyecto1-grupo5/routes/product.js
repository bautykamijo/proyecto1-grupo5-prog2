const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/producto/:id', productController.listaProductos);

module.exports = router;


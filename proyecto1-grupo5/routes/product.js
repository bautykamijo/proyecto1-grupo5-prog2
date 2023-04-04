const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/detalleproducto/:id', productController.listaProductos);

module.exports = router;


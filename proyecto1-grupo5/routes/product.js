const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.listaProductos);



module.exports = router;


const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/all', productController.findAll);
router.get('/detail/:id', productController.detalle);
router.get('/add', productController.agregarProducto);

router.post("/delete/:id",productController.delete)

router.get("/update/:id", productController.showFormUpdate)

router.post("/update/:id",productController.update)
module.exports = router;


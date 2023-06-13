const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.findAll);
router.get('/detail/:id', productController.detalle);
router.get('/results', productController.resultados);


router.get('/add', productController.showForm);
router.post('/add', productController.store);

router.get("/update/:id", productController.showFormUpdate)
router.post("/update/:id",productController.update)

router.post("/delete",productController.delete)

module.exports = router;


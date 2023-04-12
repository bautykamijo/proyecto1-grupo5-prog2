var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.indice);
router.get('/results', indexController.indice);


module.exports = router;

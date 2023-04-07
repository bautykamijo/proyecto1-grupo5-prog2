const express = require('express');
const router = express.Router();
const registerController= require('../controllers/registerController')

router.get('/registro',registerController.registro)
module.exports= router
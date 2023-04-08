var express = require('express');
var router = express.Router();
const usuarios= require("../controllers/users")
/* GET users listing. */
router.get('/register', usuarios.register)
router.get("/login",usuarios.login)
router.get('/regresar', usuarios.regresar)
router.get("/logo",usuarios.logo)
router.get("/perfil",usuarios.perfil)


module.exports = router;

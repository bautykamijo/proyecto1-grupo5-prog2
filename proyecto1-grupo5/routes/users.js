var express = require('express');
var router = express.Router();
const usuarios= require("../controllers/userController")
/* GET users listing. */
router.get('/register', usuarios.register)
router.get("/login",usuarios.login)
router.get('/regresar', usuarios.regresar)
router.get("/logo",usuarios.logo)
router.get("/perfil",usuarios.perfil)
router.get("/profile-edit",usuarios.editar)
router.get("/agregar",usuarios.agregar)
router.get("/resultados",usuarios.resultados)
module.exports = router;

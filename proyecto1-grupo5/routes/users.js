var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")
/* GET users listing. */
router.get('/register', userController.register)
router.get("/login",userController.login)
router.get('/regresar', userController.regresar)
router.get("/logo",userController.logo)
router.get("/perfil",userController.perfil)
router.get("/profile-edit",userController.editar)
router.get("/agregar",userController.agregar)
router.get("/resultados",userController.resultados)
module.exports = router;

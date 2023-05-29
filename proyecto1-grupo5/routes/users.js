var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")
/* GET users listing. */
router.get('/register', userController.register)
router.get("/login",userController.login)
router.get("/profile",userController.perfil)
router.get("/profile-edit",userController.editar)
router.post("/register", userController.store)
router.post("/login", userController.loginPost)
router.get('/register', userController.create)

module.exports = router;

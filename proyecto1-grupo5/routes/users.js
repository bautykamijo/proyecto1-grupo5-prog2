var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")
/* GET users listing. */

router.get("/profile/:id",userController.perfil)
router.get("/profile-edit",userController.editar)

router.get('/register', userController.create)
router.post("/register", userController.store)

router.get('/login', userController.login );
router.post("/login", userController.loginPost);

router.get('/logout', userController.logout );


module.exports = router;

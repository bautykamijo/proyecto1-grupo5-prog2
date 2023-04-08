const express = require('express');
const router = express.Router();
router.get("/register", function(req,res){
registerController ={
    registro : { 
    email: req.query.email,
    usuario : req.query.usuario,
    contrasenia : req.query.contrasenia,
    fechaNacimiento : req.query.fechaNacimiento,
    nroDocumento : req.query.nroDocumento}
  

    
    

    }})
    


  module.exports = router;

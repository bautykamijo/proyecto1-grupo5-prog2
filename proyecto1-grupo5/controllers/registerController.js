// Importar los módulos necesarios
const express = require('express');
const router = express.Router();
router.get("/registro", function(req,res){
const registerController ={
    registro : { 
    email: req.query.email,
    usuario : req.query.usuario,
    contrasenia : req.query.contrasenia,
    fechaNacimiento : req.query.fechaNacimiento,
    nroDocumento : req.query.nroDocumento}
  

    
    

    }})
    res.render('confirmacionRegistro', {email: email, usuario: usuario, fechaNacimiento: fechaNacimiento, nroDocumento: nroDocumento});
;



  module.exports = router;

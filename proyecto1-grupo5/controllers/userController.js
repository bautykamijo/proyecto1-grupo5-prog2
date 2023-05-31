const db = require('../database/models');
let datos = require('../db/datos');
const bcrypt = require("bcryptjs")

const userController = {
    
register: function (req,res) {
    res.render(
        'register'
    
)},
login: function (req,res) {
    res.render(
        'login'
)},
regresar: function (req,res) {
res.render(
    'index'
    )},
logo: function (req,res) {
    res.render(
        'index'
)},
perfil: function (req,res) {
    res.render(
        'profile', {lista : datos,
                     comments : datos.comentarios} 
    )},
editar: function (req,res) {
    res.render(
    "profile-edit", {lista : datos,
    }
    )},
agregar: function (req,res) {
    res.render("product-add", {lista : datos})
        
},
resultados:function (req,res) {
    res.render("search-results")
    
},

create: function(req, res) {
    return res.render('register');
    },


store: function (req,res) {
    let info= req.body
    info.contrasenia = bcrypt.hashSync(info.contrasenia, 10)
    db.Usuario.create(userSave)
    .then (function (result) {
        return res.redirect("/users/login");
    })
    .catch(function (error) {
        console.log(error)
    })
    
    
},
loginPost: function (req,res) {
    let mailBuscado= req.body.mail;
    let contra= req.body.contrasenia;
    let filtro= {
        where: [{mail:mailBuscado }]
    }


    db.Usuario.findOne(filtro)
    .then((resultado) => {
        if (resultado != null) {

            let claveCorrecta = bcrypt.compareSync(contra, resultado.contrasenia);

            if (claveCorrecta) {
                return res.send('Existe el mail buscado y su contraseña es correcta');
            } else {
                return res.send('Existe el mail buscado, pero su contraseña es incorrecta');
            }
           
        } else {
            return res.send('Este mail no esta registrado en nuestro sistema');
        }
    }).catch((error) => {
        console.log(error);
    });
    }
    
}




module.exports = userController;
const db = require('../database/models');
const user = db.Usuario;
const bcrypt = require("bcryptjs");

const userController = {
    
register: function (req,res) {
    res.render(
        'register'
    
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

    let errors = {};

        if (req.body.email == "") {
            errors.message = "El email está vacio";
            res.locals.errors = errors;
            return res.render('register');

        } else if(req.body.password == ""){
            errors.message = "La clave está vacia";
            res.locals.errors = errors;
            return res.render('register');
        } else {

    let info= req.body

    console.log(info);

    let userStore = {
        name: info.name,
        mail: info.mail,

        contrasenia: bcrypt.hashSync(info.contrasenia, 10),
        remember_token: ""
    }

    user.create(userStore)
    .then (function (result) {
        console.log(result);
        return res.redirect("/users/login");
    })
    .catch(function (error) {
        console.log(error)
    })
}
    
},
login: function(req, res) {
    if (req.session.user != undefined) {
        return res.redirect('/');
    } else {
        return res.render('login');
    }
},
loginPost: function (req,res) {

    let mailBuscado = req.body.mail;
    let contra = req.body.contrasenia;
    let filtro = {
        where: [{mail:mailBuscado }]
    }


    user.findOne(filtro)
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
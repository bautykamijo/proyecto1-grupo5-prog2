const db = require('../database/models');
const user = db.Usuario;
const bcrypt = require("bcryptjs");

const userController = {
    
perfil: function (req,res) {
    res.render(
        'profile', {lista : datos,
                     comments : datos.comentarios} 
    )},
editar: function (req,res) {
    res.render(
    "profile-edit", {lista : datos,})
},

create: function(req, res) {
    return res.render('register');
    },


store: function (req,res) {

    let errors = {};

        if (req.body.mail == "") {
            errors.message = "El email está vacio";
            res.locals.errors = errors;
            return res.render('register');

        } else if(req.body.contrasenia == ""){
            errors.message = "La clave está vacia";
            res.locals.errors = errors;
            return res.render('register');
        } else {

    let info= req.body

    console.log(info);

    let userStore = {
        nombre: req.body.nombre,
        mail: req.body.mail,
        contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
        foto_perfil: req.body.foto_perfil,
        dni: req.body.dni,
        fecha_nacimiento: req.body.fecha_nacimiento

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
        where: [{mail:mailBuscado }]}


    user.findOne(filtro)
    .then((resultado) => {
        console.log(resultado);

        let errors = {}; 

        if (resultado != null) {

            let claveCorrecta = bcrypt.compareSync(contra, resultado.contrasenia);

            if (claveCorrecta) {

                req.session.user = resultado.dataValues;

                    if (req.body.rememberme != undefined) {
                        res.cookie('userId', resultado.id, {maxAge: 1000 * 60 * 15})}
                     return res.redirect('/');

                } else {
                    errors.message = "El mail existe, pero la contraseña es incorrecta!";
                    res.locals.errors = errors;
                    return res.render('login');
                }

                } else {
                errors.message = "No existe el mail!";
                res.locals.errors = errors;
                return res.render('login');
                }

    
    }).catch((error) => {
        console.log(error);
    });


    },
    logout: function(req, res) {
        res.clearCookie('userId');

        return res.render('login');
    },
};






module.exports = userController;
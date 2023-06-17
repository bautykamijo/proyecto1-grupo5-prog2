const db = require('../database/models');
const user = db.Usuario;
const bcrypt = require("bcryptjs");

const userController = {

    perfil: function (req, res) {

        let indice = req.params.id;

        let rel = {include: [{association: "productos"},
                { association: "comentarios" }],
                order : [[{ model:  db.Producto, as: 'productos' },'created_at', 'DESC']]
        };

        user.findByPk(indice, rel)
            .then(function (resultados) {
                //return res.send(resultados);
                return res.render('profile', { lista: resultados });
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    editar: function (req, res) {
        let id = req.params.id;

        user.findByPk(id)
            .then((result) => {


                return res.render("profile-edit", { seleccionado: result });
            })
            .catch((err) => {
                console.log(err);
            });

    },

    editarPost: function (req, res) {


        let idUsuario = req.params.id;
        let info = req.body;


        let errors = {};

        if (req.body.mail == "") {
            errors.message = "El email está vacio";
            res.locals.errors = errors;
            return res.render('profile-edit');

         } else {

         if (req.body.contrasenia != "") {
            const newPass = bcrypt.hashSync(info.contrasenia, 10)
            info.contrasenia = newPass}
            
            else {
                info.contrasenia = info.contraVieja
            }

            user.update(info, {
                where: [{ id: idUsuario }],
            })
                .then((result) => {
                    return res.redirect("/users/profile/" + idUsuario);
                })
                .catch((err) => {
                    console.log(err);
                });

        }


    },

    create: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/');
        } else {
        return res.render('register');
         }
    },


    store: function (req, res) {

        let errors = {};

        if (req.body.mail == "") {
            errors.message = "El email está vacio";
            res.locals.errors = errors;
            return res.render('register');

        } else if (req.body.contrasenia == "") {
            errors.message = "La clave está vacia";
            res.locals.errors = errors;
            return res.render('register');

        }  else {

            let mailBuscado = req.body.mail;

            let criterio = {where: [{ mail: mailBuscado }]};

            user.findOne(criterio)
            .then(function (respuesta) {
                
            if (respuesta != undefined) {
                errors.message = 'El email ya esta en uso!';
                res.locals.errors = errors;
                //return res.send(criterio);
                return res.render('register');
            
        
            } else {

            let info = req.body

            console.log(info);

            let userStore = {
                nombre: req.body.nombre,
                mail: req.body.mail,
                contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
                foto_perfil: req.body.foto_perfil,
                dni: req.body.dni,
                fecha_nacimiento: req.body.fecha_nacimiento};

            user.create(userStore)
                .then(function (result) {
                    console.log(result);
                    return res.redirect("/users/login");
                })
                .catch(function (error) {
                    console.log(error);

                });
            }
        })
                .catch(function (error) {
                    console.log(error);
                })};
    },
    login: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/');
        } else {
            return res.render('login');
        }

    },
    loginPost: function (req, res) {

        let mailBuscado = req.body.mail;
        let contra = req.body.contrasenia;
        let filtro = {
            where: [{ mail: mailBuscado }]
        }


        user.findOne(filtro)
            .then((resultado) => {
                console.log(resultado);

                let errors = {};

                if (resultado != null) {

                    let claveCorrecta = bcrypt.compareSync(contra, resultado.contrasenia);

                    if (claveCorrecta) {
                        req.session.user = resultado.dataValues;
                        console.log(req.session.user)

                        if (req.body.rememberme != undefined) {
                            res.cookie('userId', resultado.id, { maxAge: 1000 * 60 * 15 })
                        }
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
    logout: function (req, res) {
        if (req.session.user == undefined) {
            return res.redirect('/');
        } else {
        console.log("LOGOUT METHOD")
        res.clearCookie('userId');
        req.session.user = undefined
        return res.render('login');
        }
    },
};






module.exports = userController;
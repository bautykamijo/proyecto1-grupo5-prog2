let datos = require('../db/datos');


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
        'profile', {lista : datos.productos}
    )},
editar: function (req,res) {
    res.render(
    "profile-edit"
    )},
agregar: function (req,res) {
    res.render("product-add")
        
},
resultados:function (req,res) {
    res.render("search-results")
    
}
}



module.exports = userController;
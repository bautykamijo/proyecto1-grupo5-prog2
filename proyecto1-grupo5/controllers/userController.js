const userController = {
    
register: function (req,res) {
    res.render(
        'register'
    )
},
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
        'profile'
    )},
edit: function (req,res) {
    res.render(
    "profile-edit"
    )}

}

module.exports = userController;
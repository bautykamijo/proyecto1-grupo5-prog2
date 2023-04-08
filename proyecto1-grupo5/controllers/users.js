const controlador = {
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
            'regresar'
)},
logo: function (req,res) {
    res.render(
        'logo'
)},
perfil: function (req,res) {
    res.render(
        'perfil'
    )}

}

module.exports= controlador
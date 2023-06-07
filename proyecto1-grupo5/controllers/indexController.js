let db = require('../database/models');


const indexController = {

    indice :  (req, res) => {

    db.Producto.findAll()
    .then(function (resultado) {
        console.log(resultado);
        return res.render('index', {lista : resultado});
    })
    .catch();
        


    },

    resultados : function (req, res) {
        let busqueda = req.query.Producto

        return res.render('search-results', {lista : datos.productos,
                                    comments : datos.comentarios});

                                    
    },



}

module.exports = indexController;
let datos = require('../db/datos');


const indexController = {

    indice : function (req, res) {
        return res.render('index', {lista : datos.productos,
                                    comments : datos.comentarios});
    },

}

module.exports = indexController;
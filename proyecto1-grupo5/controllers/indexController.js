let datos = require('../db/datos');


const indexController = {

    indice : function (req, res) {
        return res.render('index', {lista : datos.productos});
    }



}

module.exports = indexController;
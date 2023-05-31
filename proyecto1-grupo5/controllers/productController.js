const db = require("../database/models");
let producto = db.Producto;


const productController = {

    detalle : (req, res) => {
        let indice = req.params.id;
        producto.findByPk(indice)
        .then(function(resultados) {
            console.log(resultados);
          return res.render('product', {
            seleccionado : resultados
          })
        })
        .catch(function(error) {
          console.log(error);
        });
    }, 
        

    agregarProducto : function (req, res) {
        return res.render('product-add',{lista:datos});
    }

    }





module.exports = productController;
const datos = require("../db/datos")
const productController = {

    detalle : function (req, res) {
        let indice = req.params.id;
        let producto = '';
        for (let i = 0; i < datos.productos.length; i++) {
            
            if (indice == datos.productos[i].id) {
                 producto = datos.productos[i];
            }  
        }

        return res.render('product',{seleccionado : producto,
                                    comments : datos.comentarios});
    }, 
        

    agregarProducto : function (req, res) {
        return res.render('product-add',{lista:datos});
    }

    }





module.exports = productController;
const datos=require("../db/datos")
const productController = {

    lista : function (req, res) {
        return res.render('productos',{
            lista:datos.productos,
            mensaje:"todos nuestros productos"});
    }, 
        
    }





module.exports = productController;
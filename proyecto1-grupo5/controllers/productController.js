const db = require("../database/models");
let producto = db.Producto;
let op = db.Sequelize.Op;


const productController = {

  findAll : (req, res) => {
    producto.findAll()
    .then(function (result) {
    
      return res.render("index", { lista: result });
    })
    .catch(function (err) {
      console.log(err);
    });
},
    detalle : (req, res) => {

        let indice = req.params.id;
      
        let rel = {include : [
          {association : "Usuario"},
          {association : "Comentario"},
        ]};

        producto.findByPk(indice, rel)
        .then(function(resultados) {
            
          return res.render('product', {seleccionado : resultados});
        })
        .catch(function(error) {
          console.log(error);
        });
    }, 
      

    agregarProducto : function (req, res) {
        return res.render('product-add');
    },
    delete: function (req,res) {
      db.Producto.destroy({where: {id:req.params.id}
      })
        res.redirect("/index")
    }

    }





module.exports = productController;
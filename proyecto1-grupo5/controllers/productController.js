const db = require("../database/models");
let producto = db.Producto;
let op = db.Sequelize.Op;


const productController = {

  findAll : (req, res) => {
    producto.findAll()
    .then(function (result) {
  
      return res.render("index", { lista : result });
    })
    .catch(function (err) {
      console.log(err);
    });
},
    
  detalle : (req, res) => {

      let indice = req.params.id;
    
      let rel = {include : [
        {association : "usuario"},
        {association : "comentarios"},
      ]};

      producto.findByPk(indice, rel)
      .then(function(resultados) {
        return res.render('product', {seleccionado : resultados});
      })
      .catch(function(error) {
        console.log(error);
      });
    }, 

  resultados : function (req, res) {

      let busqueda = req.query.search;

      let filtro = {where : [{nombre : {[op.like] : "%" + busqueda + "%"}}],
                    order : [['created_at', 'DESC']]
                  };

      producto.findAll(filtro)
      .then(function (result) {
        console.log(result);
        return res.render("search-results", {lista : result});
      })
      .catch(function (error) {
        console.log(error);
      });                       
    },

  showForm: (req, res) => {
    if (req.session.user != undefined) {
      return res.render("product-add");
    } else{
      return res.redirect("/users/login")};
    },


  store : (req, res) => {

      let info = req.body;

      producto.create(info)
      .then((result) => {
        return res.redirect("/");
      })
      .catch((error) => {
        console.log(error);
      });
    },


showFormUpdate: (req, res) => {
    let id = req.params.id;

    producto.findByPk(id)
    .then((result) => {
    console.log(result);
    return res.render("product-update", { seleccionado: result });
    })
    .catch((err) => {
    console.log(err);
    });
},


update: (req, res) => {
let idProducto = req.params.id;
let info = req.body;

producto.update(info, {
    where: [{ id: idProducto }],
    })
    .then((result) => {
    return res.redirect("/product/detail/" + idProducto);
    })
    .catch((err) => {
    console.log(err);
    });

},

  
  delete: function (req,res) {

    let idParaEliminar = req.body.id;

    

    producto.destroy({
      where: [{ id: idParaEliminar }],
    })
    .then((result) => {
      return res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
  },

};





module.exports = productController;
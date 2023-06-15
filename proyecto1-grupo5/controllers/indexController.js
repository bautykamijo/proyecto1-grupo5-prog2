let db = require('../database/models');


const indexController = {

    findAll :  (req, res) => {

      let rel = {include : [
        {association : "usuario"},
        {association : "comentarios"}],
        order : [['created_at', 'DESC']]};

    db.Producto.findAll(rel)
    .then(function (result) {
      
        return res.render("index", { lista : result });
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}

module.exports = indexController;
let db = require('../database/models');


const indexController = {

    findAll :  (req, res) => {

    db.Producto.findAll()
    .then(function (result) {
        return res.render("index", { lista : result });
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}

module.exports = indexController;
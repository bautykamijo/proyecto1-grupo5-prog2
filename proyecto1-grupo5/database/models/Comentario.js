module.exports = function(sequelize, dataTypes) {

    let alias = 'Comentario';

    let cols = {

        id : {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario_id : {
            type : dataTypes.INTEGER
        },
        producto_id : {
            type : dataTypes.INTEGER
        },
        texto : {
            type : dataTypes.STRING
        },
        created_at : {
            type : dataTypes.DATE
        },
        updated_at : {
            type : dataTypes.DATE
        },
        deleted_at : {
            type : dataTypes.DATE
        }};

    let config = {
            tableName: 'comentarios', 
            timestamps: true, 
            underscored: true
        };



    let Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = (models) => {
        Comentario.belongsToMany(models.Usuario, {
            as: 'usuario',
            through: "comentarios",
            foreignKey: 'usuario_id',
            otherKey: "producto_id",
            timeStamps: "True"
  
        });
      
        Comentario.belongsToMany(models.Producto, {
          
          as: 'producto',
          through: "comentarios",
          foreignKey: 'producto_id',
          otherKey: "usuario_id",
          timeStamps: "True"

        });
      };
    return Comentario;
}
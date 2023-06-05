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
        Comentario.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id',
        });
      
        Comentario.belongsTo(models.Producto, {
          as: 'producto',
          foreignKey: 'producto_id',
        });
      };
    return Comentario;
}
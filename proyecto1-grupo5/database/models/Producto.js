module.exports = function(sequelize, dataTypes) {

    let alias = 'Producto';

    let cols = {

        id : {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario_id : {
            type : dataTypes.INTEGER
        },
        nombre : {
            type : dataTypes.STRING
        },
        descripcion : {
            type : dataTypes.STRING
        },
        img : {
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
            tableName: 'productos', 
            timestamps: true, 
            underscored: true
        };



    let Producto = sequelize.define(alias, cols, config);

    
    Producto.associate = (models) => {

        Producto.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id'
        }),

        
        Producto.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'producto_id'
        })};

          
    return Producto;
            };
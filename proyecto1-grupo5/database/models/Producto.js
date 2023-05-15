module.exports = function(sequelize, dataTypes) {

    let alias = 'Producto';

    let cols = {

        id : {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre : {
            type : dataTypes.STRING
        },
        mail : {
            type : dataTypes.STRING
        },
        contrasenia : {
            type : dataTypes.STRING
        },
        foto_perfil : {
            type : dataTypes.STRING
        },
        dni : {
            type: dataTypes.INTEGER
        },
        fecha_nacimiento : {
            type : dataTypes.DATE
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
            tableName: 'usuarios', 
            timestamps: true, 
            underscored: true
        };



    let Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}
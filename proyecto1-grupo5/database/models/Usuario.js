module.exports = function(sequelize, dataTypes) {

    let alias = 'Usuario';

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
        createdAt : {
            type : dataTypes.DATE
        },
        updatedAt : {
            type : dataTypes.DATE
        },
        deletedAt : {
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
const datos = {

    usuario : {

        nombre : 'Ramiro Porco',
        mail : 'chanchaporco@gmail.com',
        fechaNacimiento : '04/03/04',
        contraseña : 'Ramiglobo123',
        numDocumento : 45072811,
        fotoPerfil : '/images/users/chancha.jpg'



    },

    productos: [
        {
                id : 1,
                nombre : "Camiseta de Racing Club",
                anio : 2021,
                fechaDeCarga : '28/08/2019',
                descripcion : 'Camiseta titular de Racing en el torneo local 2021. En este torneo finalizo en la 15° posicion. Su maxima figura fue Lisandro Lopez.',
                image : '/images/products/camiseta-racing.jpg'
    },{
                id : 2,
                nombre : "Camiseta de Boca Juniors",
                anio : 2022,
                fechaDeCarga : '28/12/2022',
                descripcion : 'Camiseta titular de Boca Juniors en el torneo local 2022. En este torneo finalizo en la 1° posicion, ganandole el campeonato a Racing en la última fecha. Su maxima figura fue Luca Langoni.',
                image : '/images/products/camiseta-boca.jpg'
    },{
                id : 3,
                nombre : "Camiseta de River Plate",
                anio : 2011,
                fechaDeCarga : '20/02/2018',
                descripcion : 'Camiseta suplente de River en el torneo local 2011. En este torneo finalizo en la 9° posicion, luego debió jugar la promoción con Belgrano de Córdoba. Terminó descendiendo a la Primera B Nacional',
                image : '/images/products/camiseta-river.jpg'
    },{
                id : 4,
                nombre : "Camiseta de Estudiantes de la Plata",
                anio : 1970,
                fechaDeCarga : '28/09/2021',
                descripcion : 'Camiseta titular de Estudiantes en la Copa Libertadores de 1970 dirigidos por Osvaldo Zubeldía, donde se consagro campeón. Aquí recibe el titulo del primer tricampeón. ',
                image : '/images/products/camiseta-estudiantes.jpg'
    },{
                id : 5,
                nombre : "Camiseta de Defensa y Justicia",
                anio : 2022,
                fechaDeCarga : '08/09/2022',
                descripcion : 'Camiseta titular de Defensa y Justicia en el torneo local 2022. En este torneo finalizo en la 12° posicion. Su maxima figura fue Nicolás "Huvita" Fernandez.',
                image : '/images/products/camiseta-dyj.jpg'
    },{
                id : 6,
                nombre : "Camiseta del Club Atletico Huracan",
                anio : 2015,
                fechaDeCarga : '28/08/2017',
                descripcion : 'Camiseta titular de Huracan en el torneo local 2015. En este torneo finalizo en la 23° posicion, siendo en ese mismo año el subcampeón de la Copa Sudamericana. Su maxima figura fue Patricio Toranzo.',
                image : '/images/products/camiseta-huracan.png'
    },{
                id : 7,
                nombre : "Camiseta del Club Atletico Lanus",
                anio : 2022,
                fechaDeCarga : '01/01/2021',
                descripcion : 'Camiseta titular de Lanus en el torneo local 2022. En este torneo finalizo en la 27° posicion. Su maxima figura fue Jose Sand.',
                image : '/images/products/camiseta-lanus.jpg'
    },{
                id : 8,
                nombre : "Camiseta del Club Atletico Banfield",
                anio : 2018,
                fechaDeCarga : '28/10/2020',
                descripcion : 'Camiseta titular de Banfield en el torneo local 2018. En este torneo finalizo en la 16° posicion. Su maxima figura fue Dario Cvitanich.',
                image : '/images/products/camiseta-banfield.jpg'
    },{
                id : 9,
                nombre : "Camiseta de San Lorenzo",
                anio : 2014,
                fechaDeCarga : '29/08/2019',
                descripcion : 'Camiseta suplente de San Lorenzo en el torneo local 2014. En este torneo finalizo en la 8° posicion. Su maxima figura fue Leandro "Pipi" Romagnoli.',
                image : '/images/products/camiseta-sanlorenzo.jpg'
    },{
                id : 10,
                nombre : "Camiseta de Velez Sarfield",
                anio : 2021,
                fechaDeCarga : '26/10/2020',
                descripcion : 'Camiseta titular de Velez en el torneo local 2021. En este torneo finalizo en la 5° posicion. Su maxima figura fue Lucas Janson.',
                image : '/images/products/camiseta-velez.jpg'
        }
    ],

    comentarios : [
    {nombre : "Ramiro Porco",
    texto :  'Que lindos recuerdos me trae esta remera.',
    image : '/images/users/default-image.png'


    },

{
            nombre : "Juan Ramirez",
            texto :  'Como puede ser tan fea? Bala.',
            image : '/images/users/default-image.png'

},{
            nombre : "Beto Fiondella",
            texto :  'Es la mas linda del mundo, ninguna se le compara. ',
            image : '/images/users/default-image.png'

},{
            nombre : "Hugo Benjamin Ibarra",
            texto :  'Sabes a donde la puedo comprar a un precio razonable? ',
            image : '/images/users/default-image.png'

},{
            nombre : "Hugo Aguirre",
            texto :  'Increible camiseta! Cuanta mistica! ',
            image : '/images/users/default-image.png'

}

    ] 
}

module.exports = datos;

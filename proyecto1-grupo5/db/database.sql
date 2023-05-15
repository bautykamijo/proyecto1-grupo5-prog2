create schema proyecto_database;

use proyecto_database;

create table usuarios
(id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(30) NOT NULL,
mail VARCHAR(50) NOT NULL,
contrasenia VARCHAR(100) NOT NULL,
foto_perfil VARCHAR(200),
dni INT NOT NULL UNIQUE,
fecha_nacimiento DATE NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
deleted_at TIMESTAMP NULL );




INSERT INTO usuarios(id,nombre,mail,contrasenia,foto_perfil,dni,fecha_nacimiento)
VALUES
(1,'Ramiro Porco','chanchaporco@gmail.com','Ramiglobo123','/images/users/chancha.jpg',45072811,"04-03-04"),
(2,'Juan Ramirez','juanperro@gmail.com','Juandog12','/images/users/default-image.png',45996541,"09-08-04"),
(3,'Beto Fiondella','robertcapo@gmail.com','Volley1998','/images/users/default-image.png',12145696,"08-11-09"),
(4,'Hugo Benjamin Ibarra','ibarraboca@gmail.com','BarraIbarra2','/images/users/default-image.png',34897662,"10-12-12"),
(5,'Hugo Aguirre','hugocarp@gmail.com','Brujita6','/images/users/default-image.png',21678009,"06-02-12");








create table productos
(id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT UNSIGNED NOT NULL,
nombre VARCHAR(50) NOT NULL,
descripcion TEXT NOT NULL,
created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
 deleted_at TIMESTAMP NULL,
 CONSTRAINT fk_productos_usuarios FOREIGN KEY(usuario_id) REFERENCES usuarios(id)
 );
 INSERT INTO productos(id,usuario_id,nombre,descripcion)  
VALUES
(1,1,"Camiseta de Racing Club","Camiseta titular de Racing en el torneo local 2021. En este torneo finalizo en la 15° posicion. Su maxima figura fue Lisandro Lopez."),
(2,2,"Camiseta de Boca Juniors","Camiseta titular de Boca Juniors en el torneo local 2022. En este torneo finalizo en la 1° posicion, ganandole el campeonato a Racing en la última fecha. Su maxima figura fue Luca Langoni."),
(3,3,"Camiseta de River Plate","Camiseta suplente de River en el torneo local 2011. En este torneo finalizo en la 9° posicion, luego debió jugar la promoción con Belgrano de Córdoba. Terminó descendiendo a la Primera B Nacional"),
(4,4,"Camiseta de Estudiantes de la Plata","Camiseta titular de Estudiantes en la Copa Libertadores de 1970 dirigidos por Osvaldo Zubeldía, donde se consagro campeón. Aquí recibe el titulo del primer tricampeón."),
(5,5,"Camiseta de Defensa y Justicia","Camiseta titular de Defensa y Justicia en el torneo local 2022. En este torneo finalizo en la 12° posicion. Su maxima figura fue Nicolás Fernandez."),
(6,1,"Camiseta del Club Atletico Huracan","Camiseta titular de Huracan en el torneo local 2015. En este torneo finalizo en la 23° posicion, siendo en ese mismo año el subcampeón de la Copa Sudamericana. Su maxima figura fue Patricio Toranzo."),
(7,2,"Camiseta del Club Atletico Lanus","Camiseta titular de Lanus en el torneo local 2022. En este torneo finalizo en la 27° posicion. Su maxima figura fue Jose Sand."),
(8,3,"Camiseta del Club Atletico Banfield","Camiseta titular de Banfield en el torneo local 2018. En este torneo finalizo en la 16° posicion. Su maxima figura fue Dario Cvitanich."),
(9,4,"Camiseta de San Lorenzo","Camiseta suplente de San Lorenzo en el torneo local 2014. En este torneo finalizo en la 8° posicion. Su maxima figura fue Leandro Romagnoli."),
(10,5,"Camiseta de Velez Sarfield","Camiseta titular de Velez en el torneo local 2021. En este torneo finalizo en la 5° posicion. Su maxima figura fue Lucas Janson.");

 



/*En la tabla de comentarios, pasamos dos comentarios para cada post, corriendo el (INSERT INTO) dos veces, se crean 4 comentarios para cada post*/


create table  comentarios( id INT unsigned primary key auto_increment,
 usuario_id int unsigned not null, 
 producto_id int unsigned not null, 
texto text not null,
 created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
 deleted_at TIMESTAMP NULL,
 CONSTRAINT fk_producto_usuarios FOREIGN KEY(usuario_id) REFERENCES usuarios(id),
 CONSTRAINT fk_producto_productos FOREIGN KEY(producto_id) REFERENCES productos(id)
 );
 INSERT INTO comentarios(id,usuario_id,producto_id,texto)
 VALUES
 (DEFAULT,1,2,"Que lindos recuerdos me trae esta remera."),
 (DEFAULT,2,4,"Como puede ser tan fea? Bala."), 
 (DEFAULT,3,6,"Es la mas linda del mundo, ninguna se le compara."),
 (DEFAULT,4,8,"Sabes a donde la puedo comprar a un precio razonable?"),
 (DEFAULT,5,10,"Increible camiseta! Cuanta mistica!"),
 (DEFAULT,1,1,"Que lindos recuerdos me trae esta remera."),
 (DEFAULT,2,3,"Como puede ser tan fea? Bala."), 
 (DEFAULT,3,5,"Es la mas linda del mundo, ninguna se le compara."),
 (DEFAULT,4,7,"Sabes a donde la puedo comprar a un precio razonable?"),
 (DEFAULT,5,9,"Increible camiseta! Cuanta mistica!"),
 (DEFAULT,1,2,"Muy Buena la pilcha"),
 (DEFAULT,2,4,"Así si me gusta."), 
 (DEFAULT,3,6,"Que tela suave que tiene."),
 (DEFAULT,4,8,"Cual es el precio?"),
 (DEFAULT,5,10,"Que colores hermosos."),
 (DEFAULT,1,1,"Muy Buena la pilcha"),
 (DEFAULT,2,3,"Así si me gusta."), 
 (DEFAULT,3,5,"Que tela suave que tiene."),
 (DEFAULT,4,7,"Cual es el precio?"),
 (DEFAULT,5,9,"Que colores hermosos.");
 
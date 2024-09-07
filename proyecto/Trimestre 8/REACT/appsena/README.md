# SIMPLE CRUD OPERATIONS WITH PHP OOPS AND REST API

> A simple rest api which is built using object oriented php for performing the CRUD operations.

## Get started

Create a project folder in htdocs if you are using XAMPP , in case you are using WAMP the root directory will be www. Dump all the codes on that folder.

Create a database in phpmyadmin and then import the products.sql file on it, change the config parameters in the config/configuration.php file as per yours.

> You can use any REST client

Here are the end points :

http://localhost/appsena/api/create-product.php

http://localhost/appsena/api/get-all-products.php

http://localhost/appsena/api/get-product.php?id_producto=YOUR_PRODUCT_ID

http://localhost/appsena/api/update-product.php?id_producto=YOUR_PRODUCT_ID

http://localhost/appsena/api/delete-product.php?id_producto=YOUR_PRODUCT_ID

{
"id_producto":"020001",
"nombre_producto": "pollo apanado",
"descripcion_producto": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
"precio_producto": "9500",
"foto_producto":"http://localhost/appsena/assets/images/020001.JPG",
"id_categoria": "02",
"nombre_categoria": "pollo"
}

## App Information

REST API WITH PHP

### Author

Suvarthi

### Version

1.0.0

### License

This project is licensed under the MIT License

### USUARIOs

{
"id_usuario":"303030",
"nombre_usuario": "maria magdalena",
"correo_usuario": "maria@gmail.com",
"clave_usuario": "123",
"foto_usuario":"http://localhost/appsena/assets/avatar/303030.jpg"
}

http://localhost/appsena/api/get-all-user.php
http://localhost/appsena/api/get-user.php?id_usuario=YOUR_ID
http://localhost/appsena/api/create-user.php

http://localhost/appsena/api/update-user.php?id_usuario=YOUR_ID
http://localhost/appsena/api/delete-user.php?id_usuario=YOUR_ID

http://localhost/appsena/api/login-user.php
{
"correo_usuario": "maria@gmail.com",
"clave_usuario": "123"
}

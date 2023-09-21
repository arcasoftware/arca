-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-04-2023 a las 06:37:26
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `arca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `idcarrito` int(11) NOT NULL,
  `forma_pago` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `idcategoria` int(10) UNSIGNED NOT NULL,
  `nombre_cat` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `com_venta`
--

CREATE TABLE `com_venta` (
  `id_venta` int(10) UNSIGNED NOT NULL,
  `fecha_venta` datetime DEFAULT NULL,
  `carrito_idcarrito` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias_primas_has_proveedores`
--

CREATE TABLE `materias_primas_has_proveedores` (
  `materias_primas_cod_materia_pri` int(10) UNSIGNED NOT NULL,
  `proveedores_idproveedor` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mat_pri`
--

CREATE TABLE `mat_pri` (
  `cod_materia_pri` int(10) UNSIGNED NOT NULL,
  `nom_mat_prima` varchar(45) NOT NULL,
  `unidad_mat_prima` varchar(50) NOT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProducto` int(10) UNSIGNED NOT NULL,
  `nombre_pro` varchar(45) DEFAULT NULL,
  `precio_pro` int(11) NOT NULL,
  `categorias_idcategoria` int(10) UNSIGNED NOT NULL,
  `carrito_idcarrito` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_has_materias_primas`
--

CREATE TABLE `productos_has_materias_primas` (
  `Productos_idProducto` int(10) UNSIGNED NOT NULL,
  `materias_primas_cod_materia_pri` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prove`
--

CREATE TABLE `prove` (
  `idproveedor` int(10) UNSIGNED NOT NULL,
  `nom_proveedor` varchar(45) NOT NULL,
  `telefono_proveedor` varchar(15) NOT NULL,
  `direccion_proveedor` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `doc_identidad` int(10) UNSIGNED NOT NULL,
  `nombre_usu` varchar(45) NOT NULL,
  `apellido_usu` varchar(45) NOT NULL,
  `tipo_identificación` varchar(11) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `fecha_de_naci` date NOT NULL,
  `genero` varchar(45) NOT NULL,
  `rol` int(11) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `com_venta_id_venta` int(10) UNSIGNED NOT NULL,
  `carrito_idcarrito` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_has_categorias`
--

CREATE TABLE `usuarios_has_categorias` (
  `usuarios_doc_identidad` int(10) UNSIGNED NOT NULL,
  `categorias_idcategoria` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`idcarrito`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`idcategoria`);

--
-- Indices de la tabla `com_venta`
--
ALTER TABLE `com_venta`
  ADD PRIMARY KEY (`id_venta`,`carrito_idcarrito`),
  ADD KEY `fk_com_venta_carrito1_idx` (`carrito_idcarrito`);

--
-- Indices de la tabla `materias_primas_has_proveedores`
--
ALTER TABLE `materias_primas_has_proveedores`
  ADD PRIMARY KEY (`materias_primas_cod_materia_pri`,`proveedores_idproveedor`),
  ADD KEY `fk_materias_primas_has_proveedores_proveedores1_idx` (`proveedores_idproveedor`),
  ADD KEY `fk_materias_primas_has_proveedores_materias_primas_idx` (`materias_primas_cod_materia_pri`);

--
-- Indices de la tabla `mat_pri`
--
ALTER TABLE `mat_pri`
  ADD PRIMARY KEY (`cod_materia_pri`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProducto`,`categorias_idcategoria`,`carrito_idcarrito`),
  ADD KEY `fk_Productos_categorias1_idx` (`categorias_idcategoria`),
  ADD KEY `fk_Productos_carrito1_idx` (`carrito_idcarrito`);

--
-- Indices de la tabla `productos_has_materias_primas`
--
ALTER TABLE `productos_has_materias_primas`
  ADD PRIMARY KEY (`Productos_idProducto`,`materias_primas_cod_materia_pri`),
  ADD KEY `fk_Productos_has_materias_primas_materias_primas1_idx` (`materias_primas_cod_materia_pri`),
  ADD KEY `fk_Productos_has_materias_primas_Productos1_idx` (`Productos_idProducto`);

--
-- Indices de la tabla `prove`
--
ALTER TABLE `prove`
  ADD PRIMARY KEY (`idproveedor`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`doc_identidad`,`com_venta_id_venta`,`carrito_idcarrito`),
  ADD KEY `fk_usuarios_com_venta1_idx` (`com_venta_id_venta`),
  ADD KEY `fk_usuarios_carrito1_idx` (`carrito_idcarrito`);

--
-- Indices de la tabla `usuarios_has_categorias`
--
ALTER TABLE `usuarios_has_categorias`
  ADD PRIMARY KEY (`usuarios_doc_identidad`,`categorias_idcategoria`),
  ADD KEY `fk_usuarios_has_categorias_categorias1_idx` (`categorias_idcategoria`),
  ADD KEY `fk_usuarios_has_categorias_usuarios1_idx` (`usuarios_doc_identidad`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `com_venta`
--
ALTER TABLE `com_venta`
  ADD CONSTRAINT `fk_com_venta_carrito1` FOREIGN KEY (`carrito_idcarrito`) REFERENCES `carrito` (`idcarrito`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `materias_primas_has_proveedores`
--
ALTER TABLE `materias_primas_has_proveedores`
  ADD CONSTRAINT `fk_materias_primas_has_proveedores_materias_primas` FOREIGN KEY (`materias_primas_cod_materia_pri`) REFERENCES `mat_pri` (`cod_materia_pri`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_materias_primas_has_proveedores_proveedores1` FOREIGN KEY (`proveedores_idproveedor`) REFERENCES `prove` (`idproveedor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_Productos_carrito1` FOREIGN KEY (`carrito_idcarrito`) REFERENCES `carrito` (`idcarrito`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Productos_categorias1` FOREIGN KEY (`categorias_idcategoria`) REFERENCES `categorias` (`idcategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `productos_has_materias_primas`
--
ALTER TABLE `productos_has_materias_primas`
  ADD CONSTRAINT `fk_Productos_has_materias_primas_Productos1` FOREIGN KEY (`Productos_idProducto`) REFERENCES `productos` (`idProducto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Productos_has_materias_primas_materias_primas1` FOREIGN KEY (`materias_primas_cod_materia_pri`) REFERENCES `mat_pri` (`cod_materia_pri`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usuarios_carrito1` FOREIGN KEY (`carrito_idcarrito`) REFERENCES `carrito` (`idcarrito`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_usuarios_com_venta1` FOREIGN KEY (`com_venta_id_venta`) REFERENCES `com_venta` (`id_venta`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios_has_categorias`
--
ALTER TABLE `usuarios_has_categorias`
  ADD CONSTRAINT `fk_usuarios_has_categorias_categorias1` FOREIGN KEY (`categorias_idcategoria`) REFERENCES `categorias` (`idcategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_usuarios_has_categorias_usuarios1` FOREIGN KEY (`usuarios_doc_identidad`) REFERENCES `usuarios` (`doc_identidad`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

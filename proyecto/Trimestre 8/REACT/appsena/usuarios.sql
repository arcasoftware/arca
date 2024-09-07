-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 28, 2018 at 06:41 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `rest_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` varchar(10) NOT NULL,
  `nombre_usuario` varchar(150) NOT NULL,
  `correo_usuario` varchar(150) NOT NULL,
  `clave_usuario`  varchar(25) NOT NULL,
  `rol_usuario` varchar(10) NOT NULL,
  `foto_usuario` varchar(150) NOT NULL,
  `upload_date` datetime NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `correo_usuario`, `clave_usuario`, `rol_usuario`, `foto_usuario`,  `upload_date`) VALUES
('101010','pepito perez', 'pepito@gmail.com', '12345',  'user',  'http://localhost/appsena/assets/avatar/101010.jpg', '2018-05-28 21:39:17'),
('202020','armando pela', 'armando@gmail.com', 'abc',  'user',  'http://localhost/appsena/assets/avatar/2020202.jpg', '2018-05-28 21:39:17')



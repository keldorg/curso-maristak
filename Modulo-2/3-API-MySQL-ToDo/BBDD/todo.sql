-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 04-09-2018 a las 10:16:29
-- Versión del servidor: 5.7.23-0ubuntu0.18.04.1
-- Versión de PHP: 7.2.7-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `todo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `amigos`
--

CREATE TABLE `amigos` (
  `idUser` int(11) NOT NULL,
  `idFriend` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesiones`
--

CREATE TABLE `sesiones` (
  `idUser` int(11) NOT NULL,
  `fechaLimite` datetime NOT NULL,
  `token` varchar(20) NOT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sesiones`
--

INSERT INTO `sesiones` (`idUser`, `fechaLimite`, `token`, `activo`) VALUES
(1, '2018-07-09 07:55:54', '1531122654569', 1),
(1, '2018-07-11 07:20:42', '1531293342508', 1),
(1, '2018-07-12 08:51:45', '1531385205441', 1),
(1, '2018-07-12 08:52:11', '1531385231801', 1),
(1, '2018-07-12 08:57:41', '1531385561838', 1),
(1, '2018-07-13 07:25:22', '1531466422750', 0),
(1, '2018-08-15 11:42:40', '1531816660599', 1),
(1, '2018-07-23 07:01:13', '1532328973733', 1),
(1, '2018-07-23 08:49:00', '1532335440732', 1),
(1, '2018-07-23 08:49:41', '1532335481307', 1),
(1, '2018-07-24 07:20:48', '1532416548711', 1),
(1, '2018-07-24 08:00:43', '1532418943956', 1),
(1, '2018-07-24 08:39:11', '1532421251363', 1),
(1, '2018-07-24 08:49:10', '1532421850072', 1),
(1, '2018-07-24 08:51:11', '1532421971578', 1),
(1, '2018-07-25 06:32:05', '1532500025233', 1),
(1, '2018-07-25 06:52:33', '1532501253797', 1),
(1, '2018-07-25 06:53:52', '1532501332536', 1),
(1, '2018-07-25 07:00:21', '1532501721499', 1),
(1, '2018-07-25 07:01:17', '1532501777799', 1),
(1, '2018-07-25 07:03:37', '1532501917223', 1),
(1, '2018-07-25 08:10:09', '1532505909404', 1),
(1, '2018-07-25 08:11:41', '1532506001756', 1),
(1, '2018-07-25 08:12:43', '1532506063556', 1),
(1, '2018-07-25 08:14:06', '1532506146537', 1),
(1, '2018-07-25 08:14:51', '1532506191102', 1),
(1, '2018-07-25 08:20:39', '1532506539010', 1),
(1, '2018-07-25 08:30:33', '1532507133849', 1),
(1, '2018-07-25 09:14:55', '1532509795487', 1),
(1, '2018-07-25 09:21:52', '1532510212769', 1),
(1, '2018-07-25 09:40:12', '1532511312726', 1),
(1, '2018-09-03 06:29:43', '1535955883449', 1),
(1, '2018-09-04 07:57:32', '1536047552039', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `todo`
--

CREATE TABLE `todo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `realizado` tinyint(1) DEFAULT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `todo`
--

INSERT INTO `todo` (`id`, `nombre`, `realizado`, `idUser`) VALUES
(1, 'Realizar la compra', 1, 1),
(3, 'Coger cita medico', 1, 1),
(4, 'tarea2', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Apellido` varchar(30) NOT NULL,
  `Edad` int(11) NOT NULL,
  `Activo` tinyint(1) NOT NULL,
  `Password` varchar(30) NOT NULL,
  `Idioma` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id`, `Nombre`, `Apellido`, `Edad`, `Activo`, `Password`, `Idioma`) VALUES
(1, 'Keldor', 'Gerrikagoitia', 29, 1, '123456', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `sesiones`
--
ALTER TABLE `sesiones`
  ADD PRIMARY KEY (`token`),
  ADD KEY `sesiones-user` (`idUser`);

--
-- Indices de la tabla `todo`
--
ALTER TABLE `todo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `todo-usuarios` (`idUser`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `todo`
--
ALTER TABLE `todo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `sesiones`
--
ALTER TABLE `sesiones`
  ADD CONSTRAINT `sesiones-user` FOREIGN KEY (`idUser`) REFERENCES `usuarios` (`Id`);

--
-- Filtros para la tabla `todo`
--
ALTER TABLE `todo`
  ADD CONSTRAINT `todo-usuarios` FOREIGN KEY (`idUser`) REFERENCES `usuarios` (`Id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

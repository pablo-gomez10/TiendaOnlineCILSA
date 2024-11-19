-- MySQL Script generated by MySQL Workbench
-- Tue Nov 19 20:00:17 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema dbCodigoArgentino
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dbCodigoArgentino
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbCodigoArgentino` DEFAULT CHARACTER SET utf8 ;
USE `dbCodigoArgentino` ;

-- -----------------------------------------------------
-- Table `dbCodigoArgentino`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbCodigoArgentino`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `mail` VARCHAR(45) NOT NULL,
  `clave` VARCHAR(8) NOT NULL,
  `activo` TINYINT NOT NULL,
  `fechaAlta` DATETIME NOT NULL,
  `fechaBaja` DATETIME NULL,
  `nivel` ENUM('Administrador', 'Profesor', 'Estudiante', 'Administrativo') NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE INDEX `mail_UNIQUE` (`mail` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCodigoArgentino`.`Persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbCodigoArgentino`.`Persona` (
  `idPersona` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(200) NULL,
  `dni` BIGINT NULL,
  `celular` VARCHAR(45) NULL,
  `linkedin` VARCHAR(45) NULL,
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idPersona`, `Usuario_idUsuario`),
  INDEX `fk_Persona_Usuario1_idx` (`Usuario_idUsuario` ASC),
  CONSTRAINT `fk_Persona_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `dbCodigoArgentino`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCodigoArgentino`.`Especialidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbCodigoArgentino`.`Especialidad` (
  `idEspecialidad` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `perfilAcademico` VARCHAR(5000) NULL,
  PRIMARY KEY (`idEspecialidad`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCodigoArgentino`.`Categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbCodigoArgentino`.`Categoria` (
  `idCategoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCodigoArgentino`.`Curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbCodigoArgentino`.`Curso` (
  `idCurso` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `comienzo` DATE NULL,
  `duracion` VARCHAR(20) NULL COMMENT 'La duracion es x horas / x meses',
  `nivel` ENUM('Avanzado', 'Intermedio', 'Principiante') NULL,
  `certifica` ENUM('CILSA', 'UBA', 'UTN', 'Codigo Argentino') NULL,
  `modalidadCursado` ENUM('Asincrono', 'Sincrono', 'Presencial') NULL,
  `ActualizacionesGratis` TINYINT NULL,
  `arancel` FLOAT NULL,
  `imagen` VARCHAR(200) NULL,
  `codigo` VARCHAR(45) NULL,
  `descripcion` VARCHAR(500) NULL,
  `abreInscripcion` DATE NULL,
  `cierraInscripcion` DATE NULL,
  `eliminado` TINYINT NULL,
  `Categoria_idCategoria` INT NOT NULL,
  PRIMARY KEY (`idCurso`, `Categoria_idCategoria`),
  INDEX `fk_Curso_Categoria1_idx` (`Categoria_idCategoria` ASC),
  CONSTRAINT `fk_Curso_Categoria1`
    FOREIGN KEY (`Categoria_idCategoria`)
    REFERENCES `dbCodigoArgentino`.`Categoria` (`idCategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCodigoArgentino`.`Rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbCodigoArgentino`.`Rol` (
  `idRol` INT NOT NULL AUTO_INCREMENT,
  `Curso_idCurso` INT NOT NULL,
  `Persona_idPersona` INT NOT NULL,
  `Persona_Usuario_idUsuario` INT NOT NULL,
  `nombre` ENUM('Profesor', 'Alumno', 'Secretario') NULL,
  `Especialidad_idEspecialidad` INT NOT NULL,
  PRIMARY KEY (`idRol`, `Curso_idCurso`, `Persona_idPersona`, `Persona_Usuario_idUsuario`, `Especialidad_idEspecialidad`),
  INDEX `fk_Profesor_Curso_idx` (`Curso_idCurso` ASC),
  INDEX `fk_Profesor_Persona1_idx` (`Persona_idPersona` ASC, `Persona_Usuario_idUsuario` ASC),
  INDEX `fk_Rol_Especialidad1_idx` (`Especialidad_idEspecialidad` ASC),
  CONSTRAINT `fk_Profesor_Curso`
    FOREIGN KEY (`Curso_idCurso`)
    REFERENCES `dbCodigoArgentino`.`Curso` (`idCurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Profesor_Persona1`
    FOREIGN KEY (`Persona_idPersona` , `Persona_Usuario_idUsuario`)
    REFERENCES `dbCodigoArgentino`.`Persona` (`idPersona` , `Usuario_idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Rol_Especialidad1`
    FOREIGN KEY (`Especialidad_idEspecialidad`)
    REFERENCES `dbCodigoArgentino`.`Especialidad` (`idEspecialidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCodigoArgentino`.`Destinatario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbCodigoArgentino`.`Destinatario` (
  `idDestinatario` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(100) NULL,
  PRIMARY KEY (`idDestinatario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCodigoArgentino`.`Requisito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbCodigoArgentino`.`Requisito` (
  `idRequisito` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(500) NULL,
  PRIMARY KEY (`idRequisito`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCodigoArgentino`.`Resumen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbCodigoArgentino`.`Resumen` (
  `idResumen` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(1000) NULL,
  PRIMARY KEY (`idResumen`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCodigoArgentino`.`Destinatario_has_Curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbCodigoArgentino`.`Destinatario_has_Curso` (
  `Destinatario_idDestinatario` INT NOT NULL,
  `Curso_idCurso` INT NOT NULL,
  PRIMARY KEY (`Destinatario_idDestinatario`, `Curso_idCurso`),
  INDEX `fk_Destinatario_has_Curso_Curso1_idx` (`Curso_idCurso` ASC),
  INDEX `fk_Destinatario_has_Curso_Destinatario1_idx` (`Destinatario_idDestinatario` ASC),
  CONSTRAINT `fk_Destinatario_has_Curso_Destinatario1`
    FOREIGN KEY (`Destinatario_idDestinatario`)
    REFERENCES `dbCodigoArgentino`.`Destinatario` (`idDestinatario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Destinatario_has_Curso_Curso1`
    FOREIGN KEY (`Curso_idCurso`)
    REFERENCES `dbCodigoArgentino`.`Curso` (`idCurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCodigoArgentino`.`Resumen_has_Curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbCodigoArgentino`.`Resumen_has_Curso` (
  `Resumen_idResumen` INT NOT NULL,
  `Curso_idCurso` INT NOT NULL,
  PRIMARY KEY (`Resumen_idResumen`, `Curso_idCurso`),
  INDEX `fk_Resumen_has_Curso_Curso1_idx` (`Curso_idCurso` ASC),
  INDEX `fk_Resumen_has_Curso_Resumen1_idx` (`Resumen_idResumen` ASC),
  CONSTRAINT `fk_Resumen_has_Curso_Resumen1`
    FOREIGN KEY (`Resumen_idResumen`)
    REFERENCES `dbCodigoArgentino`.`Resumen` (`idResumen`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Resumen_has_Curso_Curso1`
    FOREIGN KEY (`Curso_idCurso`)
    REFERENCES `dbCodigoArgentino`.`Curso` (`idCurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCodigoArgentino`.`Requisito_has_Curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbCodigoArgentino`.`Requisito_has_Curso` (
  `Requisito_idRequisito` INT NOT NULL,
  `Curso_idCurso` INT NOT NULL,
  PRIMARY KEY (`Requisito_idRequisito`, `Curso_idCurso`),
  INDEX `fk_Requisito_has_Curso_Curso1_idx` (`Curso_idCurso` ASC),
  INDEX `fk_Requisito_has_Curso_Requisito1_idx` (`Requisito_idRequisito` ASC),
  CONSTRAINT `fk_Requisito_has_Curso_Requisito1`
    FOREIGN KEY (`Requisito_idRequisito`)
    REFERENCES `dbCodigoArgentino`.`Requisito` (`idRequisito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Requisito_has_Curso_Curso1`
    FOREIGN KEY (`Curso_idCurso`)
    REFERENCES `dbCodigoArgentino`.`Curso` (`idCurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCodigoArgentino`.`Inscripcion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbCodigoArgentino`.`Inscripcion` (
  `idInscripcion` INT NOT NULL AUTO_INCREMENT,
  `fechaInscripcion` DATETIME NOT NULL,
  `fechaBaja` DATETIME NULL,
  `Persona_idPersona` INT NOT NULL,
  `Persona_Usuario_idUsuario` INT NOT NULL,
  `Curso_idCurso` INT NOT NULL,
  `Curso_Categoria_idCategoria` INT NOT NULL,
  PRIMARY KEY (`idInscripcion`, `Persona_idPersona`, `Persona_Usuario_idUsuario`, `Curso_idCurso`, `Curso_Categoria_idCategoria`),
  INDEX `fk_Inscripcion_Persona1_idx` (`Persona_idPersona` ASC, `Persona_Usuario_idUsuario` ASC),
  INDEX `fk_Inscripcion_Curso1_idx` (`Curso_idCurso` ASC, `Curso_Categoria_idCategoria` ASC),
  CONSTRAINT `fk_Inscripcion_Persona1`
    FOREIGN KEY (`Persona_idPersona` , `Persona_Usuario_idUsuario`)
    REFERENCES `dbCodigoArgentino`.`Persona` (`idPersona` , `Usuario_idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Inscripcion_Curso1`
    FOREIGN KEY (`Curso_idCurso` , `Curso_Categoria_idCategoria`)
    REFERENCES `dbCodigoArgentino`.`Curso` (`idCurso` , `Categoria_idCategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbCodigoArgentino`.`Tarea`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbCodigoArgentino`.`Tarea` (
  `idTarea` INT NOT NULL AUTO_INCREMENT,
  `titulo` ENUM('Agregar Curso', 'Editar Curso', 'Eliminar Curso', 'Abrir Inscripcion', 'Cerrar Inscripcion') NOT NULL,
  `descripcion` VARCHAR(5000) NOT NULL,
  `estado` ENUM('Pendiente', 'Iniciada', 'Finalizada') NOT NULL,
  `Rol_idRol` INT NOT NULL,
  PRIMARY KEY (`idTarea`, `Rol_idRol`),
  INDEX `fk_Tarea_Rol1_idx` (`Rol_idRol` ASC),
  CONSTRAINT `fk_Tarea_Rol1`
    FOREIGN KEY (`Rol_idRol`)
    REFERENCES `dbCodigoArgentino`.`Rol` (`idRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

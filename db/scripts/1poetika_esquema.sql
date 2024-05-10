-- MySQL Script generated by MySQL Workbench
-- Wed May  8 16:49:18 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema poetika
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema poetika
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `poetika` ;
USE `poetika` ;

-- -----------------------------------------------------
-- Table `poetika`.`author`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `poetika`.`author` (
  `author_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `born` INT NOT NULL,
  PRIMARY KEY (`author_id`),
  UNIQUE INDEX `author_id_UNIQUE` (`author_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `poetika`.`poem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `poetika`.`poem` (
  `poem_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `author` VARCHAR(45) NULL,
  `year_release` INT NULL,
  `author_id` INT NOT NULL,
  PRIMARY KEY (`poem_id`),
  UNIQUE INDEX `poem_id_UNIQUE` (`poem_id` ASC) VISIBLE,
  INDEX `fk_poem_author_idx` (`author_id` ASC) VISIBLE,
  CONSTRAINT `fk_poem_author`
    FOREIGN KEY (`author_id`)
    REFERENCES `poetika`.`author` (`author_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `poetika`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `poetika`.`role` (
  `role_id` INT NOT NULL AUTO_INCREMENT,
  `role` VARCHAR(45) NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE INDEX `role_id_UNIQUE` (`role_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `poetika`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `poetika`.`user` (
  `user_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE,
  INDEX `fk_user_role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `poetika`.`role` (`role_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `poetika`.`favs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `poetika`.`favs` (
  `user_user_id` INT NOT NULL,
  `poem_poem_id` INT NOT NULL,
  PRIMARY KEY (`user_user_id`, `poem_poem_id`),
  INDEX `fk_user_has_poem_poem1_idx` (`poem_poem_id` ASC) VISIBLE,
  INDEX `fk_user_has_poem_user1_idx` (`user_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_poem_user1`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `poetika`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_poem_poem1`
    FOREIGN KEY (`poem_poem_id`)
    REFERENCES `poetika`.`poem` (`poem_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

CREATE DATABASE  IF NOT EXISTS `savetheworld` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `savetheworld`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: savetheworld
-- ------------------------------------------------------
-- Server version	5.7.27-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `itemdonations`
--

DROP TABLE IF EXISTS `itemdonations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `itemdonations` (
  `iditemDonate` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Holds id of item',
  `itemName` varchar(45) NOT NULL,
  `location` varchar(45) NOT NULL,
  `amount` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`iditemDonate`,`itemName`,`location`,`amount`,`email`),
  UNIQUE KEY `iditemDonate_UNIQUE` (`iditemDonate`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itemdonations`
--

LOCK TABLES `itemdonations` WRITE;
/*!40000 ALTER TABLE `itemdonations` DISABLE KEYS */;
INSERT INTO `itemdonations` VALUES (3,'hawkeye gear','Iowa City','896580','bestcollege@aol.com'),(4,'vaccine','CDC','1','wedidit@yahoo.com'),(5,'concrete','Minnesota','100 lbs','regular'),(6,'goggles','Iowa','100','regular'),(7,'nutter butter','AMes','50','regular'),(8,'tamale','Mexico','200','regular'),(9,'concrete','Minnesota','100 lbs','regular'),(10,'concrete','Minnesota','100 lbs','regular'),(11,'concrete','Minnesota','100 lbs','regular');
/*!40000 ALTER TABLE `itemdonations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-27 13:34:20

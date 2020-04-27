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
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matches` (
  `matchID` int(11) NOT NULL AUTO_INCREMENT,
  `donationLocation` varchar(45) NOT NULL,
  `requestLocation` varchar(45) NOT NULL,
  `Amount` int(11) NOT NULL,
  `Item` varchar(45) NOT NULL,
  PRIMARY KEY (`matchID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
INSERT INTO `matches` VALUES (1,'Iowa City','Africa',100,'Bananas'),(2,'North Pole','South Pole',1,'Bears'),(3,'Brazil','The Pentagon',60,'blankets'),(4,'Florida','The Pentagon',80,'sunscreen'),(5,'Iowa City','The Pentagon',7860,'hawkeye gear'),(6,'Iowa City','India',500,'hawkeye gear'),(7,'Iowa City','Hawaii',1000,'hawkeye gear'),(8,'Iowa City','Yep',100,'hawkeye gear'),(9,'Iowa City','Okayyy',500,'hawkeye gear'),(10,'Iowa City','Kanye',20,'hawkeye gear'),(11,'Iowa City','DC',100,'hawkeye gear'),(12,'Iowa City','LA',30,'hawkeye gear'),(13,'Iowa City','Iowa City',100,'hawkeye gear'),(14,'Iowa City','Japan',50,'hawkeye gear'),(15,'Iowa City','North Pole',1000,'hawkeye gear'),(16,'Iowa City','DC',20,'hawkeye gear');
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
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

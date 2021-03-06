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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `Username` varchar(50) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Priveleges` varchar(10) NOT NULL DEFAULT 'User',
  PRIMARY KEY (`Username`,`Password`,`Priveleges`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Holds all users of save the world';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('nicreid','554cc5dbffcbd721e71d591543ece7d4feddbf75dbe4fd1cec15948d12c07d12wp4gr6Klb80SsMehKZYGlQ==','User'),('nicreid','password','admin'),('nicreid','U2FsdGVkX1+KFctSanCZnfpbJv+56sI3JtvYFGPimOc=','User'),('nicreid','U2FsdGVkX1+tpvbA1DomDDkn9sG4INi+MVhhq0x1KM4=','User'),('nicreid','U2FsdGVkX1/7Ppm+3apFv5qF/zH2ffVWlinMkrdP+8E=','User'),('nicreid','U2FsdGVkX1/jxt0zrSnWUqsl+si16Sz19muESaOpwgY=','User'),('nicreid','U2FsdGVkX1/lxa7IIXzaNzrTb8IQm25l+eWS31pcPhQ=','User'),('regular','password','admin'),('testing','U2FsdGVkX1/TcYjvLoKhfqY3ZXT2EmOvm75yuFYZMYY=','User');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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

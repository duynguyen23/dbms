-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (x86_64)
--
-- Host: localhost    Database: smdb
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classes` (
  `course_id` varchar(50) NOT NULL,
  `semester_id` int NOT NULL,
  `group_id` varchar(50) NOT NULL,
  `class_building` varchar(50) DEFAULT NULL,
  `room_number` int DEFAULT NULL,
  `lecturer_id` int DEFAULT NULL,
  PRIMARY KEY (`course_id`,`semester_id`,`group_id`),
  KEY `class_fk_semester` (`semester_id`),
  KEY `class_fk_lecturer` (`lecturer_id`),
  CONSTRAINT `class_fk_course` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`),
  CONSTRAINT `class_fk_lecturer` FOREIGN KEY (`lecturer_id`) REFERENCES `lecturers` (`lecturer_id`),
  CONSTRAINT `class_fk_semester` FOREIGN KEY (`semester_id`) REFERENCES `semesters` (`semester_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES ('CE1002',231,'CC02','C3',102,4),('CE1002',232,'CC01','A5',102,10),('CE1002',232,'CC02','A5',103,10),('CO1023',221,'CC01','B4',501,1),('CO1023',221,'CC02','B4',301,1),('CO1023',221,'CC03','B4',502,6),('CO1023',232,'CC01','B4',201,1),('CO2001',212,'CC01','A4',202,1),('CO2001',232,'CC01','B1',301,6),('CO3002',231,'CC01','B2',306,1),('MT1001',211,'CC03','C6',302,3);
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-10 15:05:51

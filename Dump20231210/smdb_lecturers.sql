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
-- Table structure for table `lecturers`
--

DROP TABLE IF EXISTS `lecturers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lecturers` (
  `lecturer_id` int NOT NULL,
  `lecturer_name` varchar(50) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `mail_address` varchar(50) DEFAULT NULL,
  `phone_number` varchar(50) DEFAULT NULL,
  `speciality` varchar(50) DEFAULT NULL,
  `department_id` int DEFAULT NULL,
  PRIMARY KEY (`lecturer_id`),
  KEY `lecturers_fk_department` (`department_id`),
  CONSTRAINT `lecturers_fk_department` FOREIGN KEY (`department_id`) REFERENCES `departments` (`department_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lecturers`
--

LOCK TABLES `lecturers` WRITE;
/*!40000 ALTER TABLE `lecturers` DISABLE KEYS */;
INSERT INTO `lecturers` VALUES (1,'Nguyen Van A','1966-05-01','Ho Chi Minh','nva@hcmut.edu.vn','09091234112','Computer Science',1),(2,'Nguyen Van B','1975-05-01','Ho Chi Minh','nvb@hcmut.edu.vn','09091234112','Electrical',2),(3,'Tran Van C','1975-06-01','Ho Chi Minh','tvc@hcmut.edu.vn','09091234112','Mathematics',3),(4,'Nguyen Minh D','1975-06-05','Ho Chi Minh','nvd@hcmut.edu.vn','09091234112','Civilization',4),(5,'Nguyen Thi E','1980-03-05','Ho Chi Minh','nte@hcmut.edu.vn','09091234112','Robot',5),(6,'Nguyen Thi Le','1980-05-01','Ho Chi Minh','ntl@hcmut.edu.vn','09091234112','Computer Science',1),(7,'Tran Minh Hoàng','1989-03-21','Hồ Chí Minh','tmhoang@hcmut.edu.vn','0921842985','Geography',7),(8,'Trần Thị Mỹ Diệu','1991-09-09','Hồ Chí Minh','dieutran@hcmut.edu.vn','0921942952','Economy',7),(9,'Nguyễn Thị Minh Thư','1989-03-21','Ho Chi Minh','thu.nguyen@hcmut.edu.vn','0913421345','Logistic',7),(10,'Nguyễn Nhật','1989-03-28','Ho Chi Minh','nnhat@hcmut.edu.vn','0909099099','Human resource',6);
/*!40000 ALTER TABLE `lecturers` ENABLE KEYS */;
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

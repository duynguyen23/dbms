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
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `student_id` int NOT NULL,
  `student_name` varchar(50) DEFAULT NULL,
  `student_class` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `mail_address` varchar(50) DEFAULT NULL,
  `phone_number` varchar(50) DEFAULT NULL,
  `major_id` int DEFAULT NULL,
  `GPA` decimal(3,2) DEFAULT NULL,
  `advisor_id` int DEFAULT NULL,
  `student_type` varchar(50) DEFAULT NULL,
  `no_credits` int DEFAULT NULL,
  `certificate` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`student_id`),
  KEY `students_fk_department` (`major_id`),
  KEY `students_fk_lecturer` (`advisor_id`),
  CONSTRAINT `students_fk_department` FOREIGN KEY (`major_id`) REFERENCES `departments` (`department_id`),
  CONSTRAINT `students_fk_lecturer` FOREIGN KEY (`advisor_id`) REFERENCES `lecturers` (`lecturer_id`),
  CONSTRAINT `chk_GPA` CHECK (((`GPA` >= 0) and (`GPA` <= 4)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (111,'Trần Nhật Mạnh',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2053123,'Nguyen Tran Trung','CC20AS01','Ho Chi Minh','trung.nguyen@hcmut.edu.vn','0927428942',3,0.00,3,'Undergraduate',120,NULL),(2111252,'Diệu Huyền','CC21KHM1','Hồ Chí Minh','huyen.dieu@hcmut.edu.vn','0291425214',1,NULL,1,NULL,128,NULL),(2113123,'Trần Văn Bảo','PG21KHM2','Bình Định','bao.tran@hcmut.edu.vn','0911123456',1,NULL,6,'Postgraduate',NULL,'IELTS 7.0'),(2134343,'Tran Thac Si','PG21ME01','Ho Chi Minh','si.tran@hcmut.edu.vn','0943542341',5,0.00,5,'Postgraduate',NULL,'TOEIC 900'),(2150127,'Nguyen Thi Ngoc','CC21KHM1','Ho Chi Minh','ngoc.nguyen@hcmut.edu.vn','09110223012',1,NULL,6,NULL,125,NULL),(2153112,'Nguyễn Thị Kiều Diễm','CC21KHM1','Thành phố Hồ Chí Minh','diem.nguyen@hcmut.edu.vn','02812381235',1,NULL,1,'Undergradute',128,NULL),(2153252,'Nguyen Minh Duy','CC21KHM1','Binh Duong','duy.nguyen233@hcmut.edu.vn','0927188942',1,0.00,6,'Undergraduate',128,NULL),(2231234,'Nguyen Cao Hoc','PG22EEE1','Ho Chi Minh','hoc.nguyen@hcmut.edu.vn','0943512752',2,0.00,2,'Postgraduate',NULL,'IELTS 6.5'),(2311039,'Phan Thi Dung','CC23CV01','Ho Chi Minh','dung.phan@hcmut.edu.vn','094354112',4,0.00,4,'Undergraduate',128,NULL),(2311207,'Jonathan Lee','CC21CV01','Ho Chi Minh','jon.lee@hcmut.edu.vn','0912345124',4,NULL,4,NULL,120,NULL),(2311275,'Tran Minh Duy','CC23CV01','Ho Chi Minh','duy.lee@hcmut.edu.vn','0912331232',4,NULL,4,NULL,120,NULL);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
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

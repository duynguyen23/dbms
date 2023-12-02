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
INSERT INTO `classes` VALUES ('CE1002',231,'CC02','C3',102,4),('CO1023',221,'CC01','B4',501,1),('CO1023',221,'CC02','B4',301,1),('CO1023',221,'CC03','B4',502,6),('CO2001',212,'CC01','A4',202,1),('CO3002',231,'CC01','B2',306,1),('MT1001',211,'CC03','C6',302,3);
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `complete`
--

DROP TABLE IF EXISTS `complete`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `complete` (
  `student_id` int NOT NULL,
  `course_id` varchar(50) NOT NULL,
  PRIMARY KEY (`student_id`,`course_id`),
  KEY `complete_fk_course` (`course_id`),
  CONSTRAINT `complete_fk_course` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`),
  CONSTRAINT `complete_fk_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complete`
--

LOCK TABLES `complete` WRITE;
/*!40000 ALTER TABLE `complete` DISABLE KEYS */;
INSERT INTO `complete` VALUES (2053123,'CO1023'),(2153252,'CO1023');
/*!40000 ALTER TABLE `complete` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `component_scores`
--

DROP TABLE IF EXISTS `component_scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `component_scores` (
  `course_id` varchar(50) DEFAULT NULL,
  `semester_id` int DEFAULT NULL,
  `group_id` varchar(50) DEFAULT NULL,
  `student_id` int DEFAULT NULL,
  `score_id` int NOT NULL AUTO_INCREMENT,
  `score` decimal(4,2) DEFAULT NULL,
  `weight` decimal(2,1) DEFAULT NULL,
  `score_type` varchar(50) DEFAULT NULL,
  `exam_type` varchar(50) DEFAULT NULL,
  `exam_date` date DEFAULT NULL,
  `exam_start_time` time DEFAULT NULL,
  `exam_end_time` time DEFAULT NULL,
  `exam_buiding` varchar(50) DEFAULT NULL,
  `exam_room` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`score_id`),
  KEY `component_scores_fk_class` (`course_id`,`semester_id`,`group_id`),
  KEY `component_scores_fk_student` (`student_id`),
  CONSTRAINT `component_scores_fk_class` FOREIGN KEY (`course_id`, `semester_id`, `group_id`) REFERENCES `classes` (`course_id`, `semester_id`, `group_id`),
  CONSTRAINT `component_scores_fk_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  CONSTRAINT `chk_exam_type` CHECK (((`exam_type` = _utf8mb4'Final') or (`exam_type` = _utf8mb4'Midterm') or (`exam_type` is null))),
  CONSTRAINT `chk_score` CHECK (((`score` >= 0) and (`score` <= 10))),
  CONSTRAINT `chk_score_type` CHECK (((`score_type` = _utf8mb4'Assignment') or (`score_type` = _utf8mb4'Exam'))),
  CONSTRAINT `chk_time` CHECK ((`exam_start_time` < `exam_end_time`)),
  CONSTRAINT `chk_weight` CHECK (((`weight` >= 0) and (`weight` <= 1)))
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `component_scores`
--

LOCK TABLES `component_scores` WRITE;
/*!40000 ALTER TABLE `component_scores` DISABLE KEYS */;
INSERT INTO `component_scores` VALUES ('CO1023',221,'CC01',2153252,2,7.00,0.4,'Assignment',NULL,NULL,NULL,NULL,NULL,NULL),('CO1023',221,'CC01',2053123,3,4.00,1.0,'Assignment',NULL,NULL,NULL,NULL,NULL,NULL),('CO1023',221,'CC01',2153252,4,10.00,0.6,'Exam','Final','2021-03-01','12:00:00','13:00:00','A4','101');
/*!40000 ALTER TABLE `component_scores` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_component_score_insert` AFTER INSERT ON `component_scores` FOR EACH ROW BEGIN     
	UPDATE take 
    SET final_result = final_result + NEW.score * NEW.weight WHERE (student_id = NEW.student_id AND course_id = NEW.course_id AND semester_id = NEW.semester_id);   
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_component_score_update` AFTER UPDATE ON `component_scores` FOR EACH ROW BEGIN     
	UPDATE take 
    SET final_result = final_result - ( OLD.score * OLD.weight) WHERE (student_id = OLD.student_id AND course_id = OLD.course_id AND semester_id = OLD.semester_id);
    UPDATE take 
    SET final_result = final_result + ( NEW.score * NEW.weight) WHERE (student_id = NEW.student_id AND course_id = NEW.course_id AND semester_id = NEW.semester_id);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_component_score_delete` AFTER DELETE ON `component_scores` FOR EACH ROW BEGIN     
	UPDATE take 
    SET final_result = final_result - OLD.score * OLD.weight WHERE (student_id = OLD.student_id AND course_id = OLD.course_id AND semester_id = OLD.semester_id);   
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `course_id` varchar(50) NOT NULL,
  `course_name` varchar(50) DEFAULT NULL,
  `credits` int DEFAULT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES ('CE1002','Human Resouces',4),('CO1023','Introducting to Computing',3),('CO2001','Programming Fundamentals',3),('CO3002','Software Engineering',4),('EE1005','Introducting to Electronic',3),('ME1023','Mechanic Design',4),('MT1001','Calculus 1',4);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `degree`
--

DROP TABLE IF EXISTS `degree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `degree` (
  `student_id` int NOT NULL,
  `university` varchar(100) NOT NULL,
  `degree_name` varchar(50) NOT NULL,
  `degree_year` year NOT NULL,
  PRIMARY KEY (`student_id`,`university`,`degree_name`,`degree_year`),
  CONSTRAINT `degree_fk_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `degree`
--

LOCK TABLES `degree` WRITE;
/*!40000 ALTER TABLE `degree` DISABLE KEYS */;
/*!40000 ALTER TABLE `degree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `department_id` int NOT NULL,
  `department_name` varchar(50) DEFAULT NULL,
  `building` varchar(50) DEFAULT NULL,
  `phone_number` varchar(50) DEFAULT NULL,
  `mail_address` varchar(50) DEFAULT NULL,
  `head_lecturer` int DEFAULT NULL,
  PRIMARY KEY (`department_id`),
  KEY `head_lecturer` (`head_lecturer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'Computer Science and Engineering','A3','0909123456','cse@hcmut.edu.vn',1),(2,'Electrical - Electronic Engineering','B1','0909123412','eee@hcmut.edu.vn',2),(3,'Applied Science','B4','09091234112','as@hcmut.edu.vn',3),(4,'Civil Engineering','B6','0909146112','ce@hcmut.edu.vn',4),(5,'Mechanical Engineering','B11','012341142','me@hcmut.edu.vn',5);
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `lecturers` VALUES (1,'Nguyen Van A','1966-05-01','Ho Chi Minh','nva@hcmut.edu.vn','09091234112','Computer Science',1),(2,'Nguyen Van B','1975-05-01','Ho Chi Minh','nvb@hcmut.edu.vn','09091234112','Electrical',2),(3,'Tran Van C','1975-06-01','Ho Chi Minh','tvc@hcmut.edu.vn','09091234112','Mathematics',3),(4,'Nguyen Minh D','1975-06-05','Ho Chi Minh','nvd@hcmut.edu.vn','09091234112','Civilization',4),(5,'Nguyen Thi E','1980-03-05','Ho Chi Minh','nte@hcmut.edu.vn','09091234112','Robot',5),(6,'Nguyen Thi Le','1980-05-01','Ho Chi Minh','ntl@hcmut.edu.vn','09091234112','Computer Science',1);
/*!40000 ALTER TABLE `lecturers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manage`
--

DROP TABLE IF EXISTS `manage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manage` (
  `department_id` int NOT NULL,
  `manager_id` int NOT NULL,
  `start_day` date NOT NULL,
  `end_day` date DEFAULT NULL,
  PRIMARY KEY (`department_id`,`manager_id`,`start_day`),
  KEY `manage_fk_lecturer` (`manager_id`),
  CONSTRAINT `manage_fk_department` FOREIGN KEY (`department_id`) REFERENCES `departments` (`department_id`),
  CONSTRAINT `manage_fk_lecturer` FOREIGN KEY (`manager_id`) REFERENCES `lecturers` (`lecturer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manage`
--

LOCK TABLES `manage` WRITE;
/*!40000 ALTER TABLE `manage` DISABLE KEYS */;
INSERT INTO `manage` VALUES (1,1,'2021-01-01','2023-01-01'),(1,6,'2020-01-01','2021-01-01'),(1,6,'2023-01-01',NULL),(2,2,'2022-01-01',NULL),(3,3,'2022-01-01',NULL),(4,4,'2022-01-01',NULL),(5,5,'2022-01-01',NULL);
/*!40000 ALTER TABLE `manage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prequisite`
--

DROP TABLE IF EXISTS `prequisite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prequisite` (
  `course_id` varchar(50) NOT NULL,
  `require_course_id` varchar(50) NOT NULL,
  PRIMARY KEY (`course_id`,`require_course_id`),
  KEY `prequisite_fk_required_course` (`require_course_id`),
  CONSTRAINT `prequisite_fk_course` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`),
  CONSTRAINT `prequisite_fk_required_course` FOREIGN KEY (`require_course_id`) REFERENCES `courses` (`course_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prequisite`
--

LOCK TABLES `prequisite` WRITE;
/*!40000 ALTER TABLE `prequisite` DISABLE KEYS */;
INSERT INTO `prequisite` VALUES ('CO2001','CO1023'),('CO3002','CO1023'),('CO3002','CO2001');
/*!40000 ALTER TABLE `prequisite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `register`
--

DROP TABLE IF EXISTS `register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `register` (
  `student_id` int NOT NULL,
  `course_id` varchar(50) NOT NULL,
  `semester_id` int NOT NULL,
  PRIMARY KEY (`student_id`,`course_id`,`semester_id`),
  KEY `register_fk_course` (`course_id`),
  KEY `register_fk_semester` (`semester_id`),
  CONSTRAINT `register_fk_course` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`),
  CONSTRAINT `register_fk_semester` FOREIGN KEY (`semester_id`) REFERENCES `semesters` (`semester_id`),
  CONSTRAINT `register_fk_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `register`
--

LOCK TABLES `register` WRITE;
/*!40000 ALTER TABLE `register` DISABLE KEYS */;
INSERT INTO `register` VALUES (2053123,'CO1023',211),(2053123,'ME1023',211),(2153252,'CO1023',211),(2053123,'CO2001',212),(2153252,'CO2001',221),(2134343,'ME1023',231),(2153252,'CO2001',231),(2311039,'EE1005',231),(2311039,'MT1001',231);
/*!40000 ALTER TABLE `register` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `check_before_register` BEFORE INSERT ON `register` FOR EACH ROW BEGIN
	IF EXISTS(
		SELECT * FROM prequisite
		LEFT JOIN complete
		ON (NEW.student_id, prequisite.require_course_id) = (complete.student_id, complete.course_id)
		WHERE complete.student_id IS NULL AND prequisite.course_id = NEW.course_id
	) THEN signal sqlstate '45000' SET MESSAGE_TEXT = 'YOU DID NOT COMPLETE THE REQUIRED COURSE';
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `semesters`
--

DROP TABLE IF EXISTS `semesters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `semesters` (
  `semester_id` int NOT NULL,
  `semester_year` year DEFAULT NULL,
  `semester` int DEFAULT NULL,
  PRIMARY KEY (`semester_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semesters`
--

LOCK TABLES `semesters` WRITE;
/*!40000 ALTER TABLE `semesters` DISABLE KEYS */;
INSERT INTO `semesters` VALUES (211,2021,1),(212,2021,2),(213,2021,3),(221,2022,1),(222,2022,2),(223,2022,3),(231,2023,1);
/*!40000 ALTER TABLE `semesters` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `students` VALUES (2053123,'Nguyen Tran Trung','CC20AS01','Ho Chi Minh','trung.nguyen@hcmut.edu.vn','0927428942',3,0.00,3,'Undergraduate',120,NULL),(2134343,'Tran Thac Si','PG21ME01','Ho Chi Minh','si.tran@hcmut.edu.vn','0943542341',5,0.00,5,'Postgraduate',NULL,'TOEIC 900'),(2153252,'Nguyen Minh Duy','CC21KHM1','Binh Duong','duy.nguyen233@hcmut.edu.vn','0927188942',1,0.00,6,'Undergraduate',128,NULL),(2231234,'Nguyen Cao Hoc','PG22EEE1','Ho Chi Minh','hoc.nguyen@hcmut.edu.vn','0943512752',2,0.00,2,'Postgraduate',NULL,'IELTS 6.5'),(2311039,'Phan Thi Dung','CC23CV01','Ho Chi Minh','dung.phan@hcmut.edu.vn','094354112',4,0.00,4,'Undergraduate',128,NULL);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `take`
--

DROP TABLE IF EXISTS `take`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `take` (
  `student_id` int NOT NULL,
  `course_id` varchar(50) NOT NULL,
  `semester_id` int NOT NULL,
  `group_id` varchar(50) NOT NULL,
  `final_result` decimal(4,2) DEFAULT NULL,
  PRIMARY KEY (`student_id`,`course_id`,`semester_id`,`group_id`),
  KEY `take_fk_class` (`course_id`,`semester_id`,`group_id`),
  CONSTRAINT `take_fk_class` FOREIGN KEY (`course_id`, `semester_id`, `group_id`) REFERENCES `classes` (`course_id`, `semester_id`, `group_id`),
  CONSTRAINT `take_fk_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  CONSTRAINT `check_final_result` CHECK (((`final_result` >= 0) and (`final_result` <= 10)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `take`
--

LOCK TABLES `take` WRITE;
/*!40000 ALTER TABLE `take` DISABLE KEYS */;
INSERT INTO `take` VALUES (2053123,'CO1023',221,'CC01',4.00),(2153252,'CO1023',221,'CC01',8.80);
/*!40000 ALTER TABLE `take` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `before_final_score_update` AFTER UPDATE ON `take` FOR EACH ROW BEGIN     
	DECLARE flag INT(11) DEFAULT -1;
    SELECT student_id INTO flag FROM complete
    WHERE student_id = NEW.student_id AND course_id = NEW.course_id;
    IF (flag <= 0 AND NEW.final_result >= 4) THEN
		INSERT INTO complete
        VALUE(NEW.student_id, NEW.course_id);
	END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `times`
--

DROP TABLE IF EXISTS `times`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `times` (
  `course_id` varchar(50) NOT NULL,
  `semester_id` int NOT NULL,
  `group_id` varchar(50) NOT NULL,
  `time_week` int NOT NULL,
  `time_day` int NOT NULL,
  `time_start` time NOT NULL,
  `time_end` time NOT NULL,
  PRIMARY KEY (`course_id`,`semester_id`,`group_id`,`time_week`,`time_day`,`time_start`,`time_end`),
  CONSTRAINT `times_fk_class` FOREIGN KEY (`course_id`, `semester_id`, `group_id`) REFERENCES `classes` (`course_id`, `semester_id`, `group_id`),
  CONSTRAINT `check_time` CHECK (((`time_start` < `time_end`) and (`time_day` >= 2) and (`time_day` <= 8)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `times`
--

LOCK TABLES `times` WRITE;
/*!40000 ALTER TABLE `times` DISABLE KEYS */;
INSERT INTO `times` VALUES ('CE1002',231,'CC02',40,2,'07:00:00','09:00:00'),('CE1002',231,'CC02',41,2,'07:00:00','09:00:00'),('CE1002',231,'CC02',42,2,'07:00:00','09:00:00'),('CE1002',231,'CC02',43,2,'07:00:00','09:00:00'),('CE1002',231,'CC02',44,2,'07:00:00','09:00:00'),('CE1002',231,'CC02',45,2,'07:00:00','09:00:00'),('CO1023',221,'CC01',40,3,'12:00:00','14:00:00'),('CO1023',221,'CC01',41,3,'12:00:00','14:00:00'),('CO1023',221,'CC01',42,3,'12:00:00','14:00:00'),('CO1023',221,'CC01',43,3,'12:00:00','14:00:00'),('CO1023',221,'CC01',44,3,'12:00:00','14:00:00'),('CO1023',221,'CC01',45,3,'12:00:00','14:00:00'),('CO1023',221,'CC02',40,3,'15:00:00','17:00:00'),('CO1023',221,'CC02',41,3,'15:00:00','17:00:00'),('CO1023',221,'CC02',42,3,'15:00:00','17:00:00'),('CO1023',221,'CC02',43,3,'15:00:00','17:00:00'),('CO1023',221,'CC02',44,3,'15:00:00','17:00:00'),('CO1023',221,'CC02',45,3,'15:00:00','17:00:00'),('CO1023',221,'CC03',40,3,'09:00:00','11:00:00'),('CO1023',221,'CC03',41,3,'09:00:00','11:00:00'),('CO1023',221,'CC03',42,3,'09:00:00','11:00:00'),('CO1023',221,'CC03',43,3,'09:00:00','11:00:00'),('CO1023',221,'CC03',44,3,'09:00:00','11:00:00'),('CO1023',221,'CC03',45,3,'09:00:00','11:00:00'),('CO2001',212,'CC01',40,3,'12:00:00','14:00:00'),('CO2001',212,'CC01',41,3,'12:00:00','14:00:00'),('CO2001',212,'CC01',42,3,'12:00:00','14:00:00'),('CO2001',212,'CC01',43,3,'12:00:00','14:00:00'),('CO2001',212,'CC01',44,3,'12:00:00','14:00:00'),('CO2001',212,'CC01',45,3,'12:00:00','15:00:00'),('CO3002',231,'CC01',40,5,'12:00:00','15:00:00'),('CO3002',231,'CC01',41,5,'12:00:00','15:00:00'),('CO3002',231,'CC01',42,5,'12:00:00','15:00:00'),('CO3002',231,'CC01',43,5,'12:00:00','15:00:00'),('CO3002',231,'CC01',44,5,'12:00:00','15:00:00'),('CO3002',231,'CC01',45,5,'12:00:00','15:00:00'),('MT1001',211,'CC03',40,6,'07:00:00','10:00:00'),('MT1001',211,'CC03',41,6,'07:00:00','10:00:00'),('MT1001',211,'CC03',42,6,'07:00:00','10:00:00'),('MT1001',211,'CC03',43,6,'07:00:00','10:00:00'),('MT1001',211,'CC03',44,6,'07:00:00','10:00:00'),('MT1001',211,'CC03',45,6,'07:00:00','10:00:00');
/*!40000 ALTER TABLE `times` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'smdb'
--

--
-- Dumping routines for database 'smdb'
--
/*!50003 DROP PROCEDURE IF EXISTS `get_all_lecturers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_lecturers`()
BEGIN     
	SELECT lecturers.lecturer_id, lecturers.lecturer_name, lecturers.dob, lecturers.address, lecturers.mail_address,
		   lecturers.phone_number, lecturers.speciality, departments.department_name
		   FROM lecturers
	INNER JOIN departments
	ON lecturers.department_id = departments.department_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_all_students` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_students`()
BEGIN     
	SELECT students.student_id, students.student_name, students.student_class, students.address, students.mail_address, 
	   students.phone_number, lecturers.lecturer_name,departments.department_name, students.student_type, students.no_credits, students.certificate FROM students 
	INNER JOIN departments
	ON students.major_id = department_id
	INNER JOIN lecturers
	ON students.advisor_id = lecturers.lecturer_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_student_carlendar` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_student_carlendar`(IN id INT)
BEGIN     
	SELECT take.course_id, courses.course_name,take.semester_id,times.time_week, times.time_day, times.time_start, times.time_end, classes.class_building, classes.room_number FROM take
	INNER JOIN times 
	ON (take.course_id,take.semester_id, take.group_id) =  (times.course_id,times.semester_id, times.group_id)
    INNER JOIN classes
    ON (take.course_id,take.semester_id, take.group_id) =  (classes.course_id,classes.semester_id, classes.group_id)
    INNER JOIN courses
    ON take.course_id = courses.course_id
	WHERE take.student_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-27 21:29:20

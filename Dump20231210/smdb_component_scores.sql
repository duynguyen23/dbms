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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-10 15:05:52

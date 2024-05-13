-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: school
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `announcements`
--

DROP TABLE IF EXISTS `announcements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `announcements` (
  `announcement_id` int NOT NULL AUTO_INCREMENT,
  `announcement` varchar(999) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(95) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`announcement_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcements`
--

LOCK TABLES `announcements` WRITE;
/*!40000 ALTER TABLE `announcements` DISABLE KEYS */;
INSERT INTO `announcements` VALUES (2,'Финалистами всероссийской олимпиады школьников стали более 6,5 тысячи учеников, сообщили в пресс-службе Минпросвещения России. \"Общее число участников Всероссийской олимпиады школьников в 2023/24 учебном году составило порядка семи миллионов человек, финалистами олимпиады стали 6687 старшеклассников. По итогам интеллектуальных состязаний 3099 старшеклассников признаны победителями и призерами: ребята завоевали 530 дипломов победителей и 2569 дипломов призеров\", - говорится в пресс-релизе. Самыми популярными предметами стали математика, физика и информатика.','Более 6,5 тысячи школьников стали финалистами всероссийской олимпиады'),(3,'В школе наконец-то появились окна!','Срочные новости');
/*!40000 ALTER TABLE `announcements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `call_schedule`
--

DROP TABLE IF EXISTS `call_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `call_schedule` (
  `index` int NOT NULL AUTO_INCREMENT,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  PRIMARY KEY (`index`),
  UNIQUE KEY `index_UNIQUE` (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `call_schedule`
--

LOCK TABLES `call_schedule` WRITE;
/*!40000 ALTER TABLE `call_schedule` DISABLE KEYS */;
INSERT INTO `call_schedule` VALUES (1,'08:00:00','08:45:00'),(2,'09:00:00','09:45:00'),(3,'10:00:00','10:45:00'),(4,'10:55:00','11:40:00'),(5,'12:05:00','12:50:00'),(6,'13:00:00','13:45:00'),(7,'14:00:00','14:45:00'),(8,'15:00:00','15:45:00'),(9,'15:55:00','16:40:00'),(10,'16:50:00','17:35:00');
/*!40000 ALTER TABLE `call_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classes` (
  `class_id` int NOT NULL AUTO_INCREMENT,
  `class_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '',
  `classroom_teacher_id` int NOT NULL,
  PRIMARY KEY (`class_id`),
  UNIQUE KEY `id_class_UNIQUE` (`class_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'6а','',2),(2,'10б','Естественно-научный',5),(3,'11а','Физико-математический',4),(4,'3в','',8);
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `homeworks`
--

DROP TABLE IF EXISTS `homeworks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `homeworks` (
  `homework_id` int NOT NULL AUTO_INCREMENT,
  `subject_id` int NOT NULL,
  `teacher_id` int NOT NULL,
  `homework` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `deadline` date NOT NULL,
  `add_homework_date` date NOT NULL,
  `class_id` varchar(45) CHARACTER SET utf8mb3 NOT NULL,
  PRIMARY KEY (`homework_id`),
  UNIQUE KEY `homework_id_UNIQUE` (`homework_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homeworks`
--

LOCK TABLES `homeworks` WRITE;
/*!40000 ALTER TABLE `homeworks` DISABLE KEYS */;
INSERT INTO `homeworks` VALUES (1,3,2,'с 30-49 читать','2024-05-21','2024-05-14','3'),(2,3,2,'с 49-56 читать, упр. 3,4,6','2024-05-28','2024-05-14','3'),(3,8,6,'с 40 упр. 4, 9','2024-05-23','2024-05-16','3'),(4,8,6,'создать сайт на тему \"школа\" с базой данных и заполнить данные','2024-05-30','2024-05-16','3'),(5,10,3,'с 5-1099 учить','2024-05-08','2024-05-15','3'),(6,5,8,'с 16 читать повесть, ответить на вопросы внизу страницы','2024-05-08','2024-05-15','1');
/*!40000 ALTER TABLE `homeworks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marks`
--

DROP TABLE IF EXISTS `marks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marks` (
  `mark_id` int NOT NULL AUTO_INCREMENT,
  `student_id` int NOT NULL,
  `mark` int NOT NULL,
  `date` date NOT NULL,
  `teacher_id` int NOT NULL,
  `subject_id` int DEFAULT NULL,
  PRIMARY KEY (`mark_id`),
  UNIQUE KEY `mark_id_UNIQUE` (`mark_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marks`
--

LOCK TABLES `marks` WRITE;
/*!40000 ALTER TABLE `marks` DISABLE KEYS */;
INSERT INTO `marks` VALUES (2,14,5,'2024-05-13',4,1),(3,14,3,'2015-05-24',5,9),(4,14,4,'2015-05-24',1,6),(5,14,3,'2016-05-24',8,5),(6,15,4,'2015-05-24',5,9),(7,13,5,'2015-05-24',5,9);
/*!40000 ALTER TABLE `marks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedule` (
  `schedule_id` int NOT NULL AUTO_INCREMENT,
  `class_id` int NOT NULL,
  `date` date NOT NULL,
  `schedule_num` int NOT NULL,
  `classroom_num` int NOT NULL,
  `teacher_id` int NOT NULL,
  `subject_id` int NOT NULL,
  PRIMARY KEY (`schedule_id`),
  UNIQUE KEY `schedule_id_UNIQUE` (`schedule_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (1,3,'2024-05-12',1,30,2,2),(2,3,'2024-05-12',2,26,1,4),(3,3,'2024-05-12',3,26,1,4),(4,3,'2024-05-12',4,12,1,6),(5,3,'2024-05-12',5,12,1,6),(6,3,'2024-05-13',1,21,7,9),(7,3,'2024-05-13',2,25,6,8),(8,3,'2024-05-13',3,25,6,7),(9,3,'2024-05-13',4,36,3,5);
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `student_id` int NOT NULL AUTO_INCREMENT,
  `class_id` int NOT NULL,
  `last_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthday` date DEFAULT NULL,
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `id_student_UNIQUE` (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,1,'Иванова','Мия',NULL),(2,1,'Чеснокова','Мария',NULL),(3,1,'Матвеев','Степан',NULL),(4,1,'Игнатьев','Мирослав',NULL),(5,1,'Панкратов','Лев',NULL),(6,2,'Панова','Александра',NULL),(7,2,'Герасимов','Захар',NULL),(8,2,'Кузнецов','Андрей',NULL),(9,2,'Никитин','Родион',NULL),(10,2,'Черная','Софья',NULL),(11,3,'Бирюков','Даниил',NULL),(12,2,'Громов','Евгений',NULL),(13,3,'Богданова','Анна',NULL),(14,3,'Баринов','Дмитрий',NULL),(15,3,'Игнатов','Михаил',NULL),(16,4,'Голубев','Максим',NULL),(17,4,'Журавлева','Виктория',NULL),(18,4,'Виноградова','Дарья',NULL),(19,4,'Николаева','Кира',NULL),(20,4,'Пахомов','Максим',NULL);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
  `subject_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`subject_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'математика'),(2,'Русский язык'),(3,'Литература'),(4,'География'),(5,'История'),(6,'Физическая культура'),(7,'Физика'),(8,'Информатика'),(9,'Биология'),(10,'Обществознание'),(11,'Химия');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `teacher_id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(99) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `specialization` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,'Гришин Михаил Сергеевич','Физическая культура'),(2,'Окулова Софья Романовна','Русский язык, Литература'),(3,'Кузнецова Дарья Александровна','История, Обществознание'),(4,'Фомин Георгий Ильич','Математика'),(5,'Волкова Ольга Никитична','Физика, Математика'),(6,'Кочетков Николай Ярославович','Физика, Информатика'),(7,'Сорокина Милана Михайловна','Биология, География'),(8,'Лапина Софья Михайловна','Русский язык, История'),(9,'Филатова Дарья Сергеевна','Химия');
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'school'
--

--
-- Dumping routines for database 'school'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-13 22:20:17

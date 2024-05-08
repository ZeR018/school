import {Router} from 'express'
import db from './db-config.js'

const routers = Router({});

// Получить id, имя фамилию и номер класса всех школьников и отсортировать их по фамилиям
routers.get('/students', (req, res) => {
    db.query(`SELECT student_id, last_name, first_name, class_name 
            FROM students s INNER JOIN classes c
            WHERE s.class_id = c.class_id
            ORDER BY last_name;`, (err, data) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.json(data)
    })
})

// Возвращает всю таблицу announcements
routers.get('/announcements', (req, res) => {
    db.query(`SELECT * FROM announcements`, (err, data) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.json(data)
    })
})

// Возвращает всю таблицу teachers
routers.get('/teachers', (req, res) => {
    db.query(`SELECT * FROM teachers`, (err, data) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.json(data)
    })
})

// Возвращает расписание звонков
routers.get('/calls_schedule', (req, res) => {
    db.query(`SELECT * FROM call_schedule`, (err, data) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.json(data)
    })
})

// Возвращает всё необходимое для таблицы списка классов
routers.get('/classes', (req, res) => {
    db.query(`SELECT class_id, class_name, full_name AS teacher_name, description
              FROM classes c INNER JOIN teachers t
              WHERE c.classroom_teacher_id = t.teacher_id
              ORDER BY class_name`, (err, data) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.json(data)
    })
})

// Принимает id ученика, возвращает его оценки
routers.get('/marks/:id', (req, res) => {
    const id = req.params.id;

    if (!id) {
        res.sendStatus(400);
        return;
    }

    db.query(`SELECT mark_id, student_id, mark, date, name as subject_name, 
                full_name as teacher_name FROM marks m
              INNER JOIN subjects s ON s.subject_id = m.subject_id
              INNER JOIN teachers t ON m.teacher_id = t.teacher_id
              WHERE student_id = ?
              ORDER BY date DESC`, [id], (err, data) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.json(data);
    })
})

// Принимает id ученика и возвращает его домашнее задание
routers.get('/homework/:id', (req, res) => {
    const studentId = req.params.id;

    if (!studentId) {
        res.sendStatus(400);
        return;
    }

    // Узнаем id класса ученика
    db.query(`SELECT class_id FROM students WHERE student_id = ?`, 
            [studentId], (err, data) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        if (data.length == 0) {
            res.sendStatus(500);
            return;
        }

        const class_id = data[0].class_id;
        
        if(!class_id) {
            res.sendStatus(400);
            return;
        }

        // Делаем запрос на получение всего домашнего задания этого класса
        db.query(`SELECT homework_id, name AS subject, full_name AS teacher, 
                    deadline, add_homework_date, homework FROM homeworks h 
                    INNER JOIN subjects s ON h.subject_id = s.subject_id 
                    INNER JOIN teachers t ON h.teacher_id = t.teacher_id 
                    INNER JOIN classes c ON h.class_id = c.class_id
                    WHERE h.class_id = ?
                    ORDER BY deadline`, [class_id], (err, data) => {
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.json(data);

        })
    })
})


// Принимает id ученика и возвращает его расписание
routers.get('/schedule/:id', (req, res) => {
    const studentId = req.params.id;

    if (!studentId) {
        res.sendStatus(400);
        return;
    }

    // Узнаем id класса ученика
    db.query(`SELECT class_id FROM students WHERE student_id = ?`, 
            [studentId], (err, data) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        if (data.length == 0) {
            res.sendStatus(500);
            return;
        }

        const class_id = data[0].class_id;
        
        if(!class_id) {
            res.sendStatus(400);
            return;
        }

        // Делаем запрос на получение всего домашнего задания этого класса
        db.query(`SELECT schedule_id, date, schedule_num, classroom_num, 
                    full_name AS teacher, name AS subject FROM schedule s 
                  INNER JOIN teachers t ON s.teacher_id = t.teacher_id 
                  INNER JOIN subjects sub ON s.subject_id = sub.subject_id
                  WHERE s.class_id = ?
                  ORDER BY date`, [class_id], (err, data) => {
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.json(data);

        })
    })
})

export default routers
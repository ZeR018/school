import mysql from 'mysql2'

// Конфигурация

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'school',
    password: 'root',
});

conn.connect( err => {
    if (err) {
        console.log(err)
        return err;
    }
    else {
        console.log('Database ----- OK')
    }
});
export default conn
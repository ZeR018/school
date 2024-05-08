import express from 'express'
import cors from 'cors'
import routers from './routers.js'

// Создаем экземпляр express - приложения
const app = express()
const port = 3001

// Включаем cors, чтобы back мог обрабатывать запросы с других сайтов 
app.use(cors())

// Промежуточных обработчик, анализирует запрос и, если есть, парсит тело запроса 
const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)

// Подключаем все запросы
app.use('/', routers)

// Запускает приложение
app.listen(port, () => {
    console.log(`Example on port ${port}`)
})


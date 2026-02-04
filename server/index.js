import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import {access} from "./access.js";

const app = express();

app.use(cors());
app.use(express.json());

const connection = mysql.createPool(access);

connection.getConnection((err, conn) => {
    if (err) {
        console.error('Ошибка подключения к БД:', err);
    } else {
        console.log('Подключение к БД успешно!');
        conn.release(); // освобождаем соединение обратно в пул
    }
});

app.get('/products', (req, res) => {
    connection.query('SELECT * FROM products', (err, data) => {
        if (err) return res.status(500).json(err);
        res.json(data);
    });
});

// Create Product

app.post('/products', (request, response) => {
    const values = [
        request.body.name,
        request.body.stock,
        request.body.price,
        request.body.status,
    ];

    connection.query(
        "INSERT INTO products (name, stock, price, status) VALUES (?)",
        [values],
        (error, data) => {
            return error ? response.send(error) : response.json(data);
        }
    );
});

app.listen(8800, () => {
    console.log('Server running on port 8800');
});

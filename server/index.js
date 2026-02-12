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


app.delete('/products/:id', (request, response) => {
    const value = request.params.id;

    connection.query(
        "DELETE FROM products WHERE id = ?",
        [value],
        (error, data) => {
            if (error) {
                return response.status(500).send(error);
            }
            return response.json(data);
        }
    );
});

// Delete multiple products
app.delete('/products', (request, response) => {
    const { ids } = request.body;

    if (!Array.isArray(ids) || ids.length === 0) {
        return response.status(400).json({
            message: 'ids must be a non-empty array'
        });
    }

    // Генерируем нужное количество ?
    const placeholders = ids.map(() => '?').join(',');

    const sql = `DELETE FROM products WHERE id IN (${placeholders})`;

    connection.query(sql, ids, (error, result) => {
        if (error) {
            return response.status(500).json(error);
        }

        return response.json({
            message: 'Products deleted successfully',
            deletedRows: result.affectedRows
        });
    });
});




// Update Product Status

app.put('/products/:id', (request, response) => {

    const productId = request.params.id;

    const values = [
        request.body.name,
        request.body.stock,
        request.body.price,
        request.body.status
    ];

    connection.query(
        "UPDATE products SET `name` = ?, `stock` = ?, `price` = ?, `status` = ? WHERE id = ?",
        [...values, productId],
        (error, data) => {
            if (error) {
                return response.status(500).send(error);
            }
            return response.json(data);
        }
    );
});

app.patch('/products/:id', (request, response) => {
    const productId = request.params.id;
    const { status } = request.body;

    if (status === undefined) {
        return response.status(400).json({ message: 'Status is required' });
    }

    connection.query(
        "UPDATE products SET `status` = ? WHERE id = ?",
        [status, productId],
        (error, data) => {
            if (error) {
                return response.status(500).send(error);
            }
            return response.json(data);
        }
    );
});

app.listen(8800, () => {
    console.log('Server running on port 8800');
});

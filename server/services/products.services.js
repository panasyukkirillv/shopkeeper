import { db } from '../config/db.js';

// Get Products

export const getProducts = () => {
    return db.query("SELECT * FROM products");
};

// ----------------------------------------------------------------------------------------------------

// Create Product

export const createProduct = (values) => {
    return db.query(
        "INSERT INTO products (name, stock, price, status) VALUES (?)",
        [values]
    );
};

// ----------------------------------------------------------------------------------------------------

// Delete Product

export const deleteProduct = (id) => {
    return db.query(
        "DELETE FROM products WHERE id = ?",
        [id],
    );
}

// ----------------------------------------------------------------------------------------------------

// Update Product

export const updateProduct = (id, values) => {
    return db.query(
        "UPDATE products SET `name` = ?, `stock` = ?, `price` = ?, `status` = ? WHERE id = ?",
        [...values, id],
    );
}

// ----------------------------------------------------------------------------------------------------

// Update Product Status

export const updateProductStatus = (id, status) => {
    return db.query(
        "UPDATE products SET `status` = ? WHERE id = ?",
        [status, id],
    );
}

// ----------------------------------------------------------------------------------------------------

// Delete Products

export const deleteProducts = (ids) => {
    return db.query(
        "DELETE FROM products WHERE id IN (?)",
        [ids]
    );
};

// ----------------------------------------------------------------------------------------------------

// Toggle Products Statuses

export const toggleProductsStatuses = (ids, status) => {
    return db.query(
        "UPDATE products SET status = ? WHERE id IN (?)",
        [status, ids]
    );
};

// ----------------------------------------------------------------------------------------------------

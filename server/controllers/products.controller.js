import * as services from '../services/products.services.js';

// Get Products

export const getProducts = async (request, response) => {
    try {
        const [data] = await services.getProducts();
        return response.json(data);
    } catch (error) {
        return response.status(500).json(error);
    }
};

// ----------------------------------------------------------------------------------------------------

// Create Product

export const createProduct = async (request, response) => {
    try {
        const values = [
            request.body.name,
            request.body.stock,
            request.body.price,
            request.body.status,
        ];
        const [data] = await services.createProduct(values);
        return response.json(data);
    } catch (error) {
        return response.status(500).json(error);
    }
};

// ----------------------------------------------------------------------------------------------------

// Delete Product

export const deleteProduct = async (request, response) => {
    try {
        const [data] = await services.deleteProduct(request.params.id);
        return response.json(data);
    } catch (error) {
        return response.status(500).json(error);
    }
};

// ----------------------------------------------------------------------------------------------------

// Update Product

export const updateProduct = async (request, response) => {
    try {
        const values = [
            request.body.name,
            request.body.stock,
            request.body.price,
            request.body.status
        ];
        const [data] = await services.updateProduct(request.params.id, values);
        return response.json(data);
    } catch (error) {
        return response.status(500).json(error);
    }
};

// ----------------------------------------------------------------------------------------------------

// Update Product Status

export const updateProductStatus = async (request, response) => {
    try {
        const [data] = await services.updateProductStatus(request.params.id, request.body.status);
        return response.json(data);
    } catch (error) {
        return response.status(500).json(error);
    }
};

// ----------------------------------------------------------------------------------------------------

// Delete Products

export const deleteProducts = async (request, response) => {
    try {
        const [data] = await services.deleteProducts(request.body.ids);
        return response.json(data);
    } catch (error) {
        return response.status(500).json(error);
    }
};

// ----------------------------------------------------------------------------------------------------


// Toggle Products Statuses

export const toggleProductsStatuses = async (request, response) => {
    try {
        const [data] = await services.toggleProductsStatuses(request.body.ids, request.body.status);
        return response.json(data);
    } catch (error) {
        return response.status(500).json(error);
    }
};

// ----------------------------------------------------------------------------------------------------

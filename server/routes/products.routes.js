import express from 'express';
import * as productsController from '../controllers/products.controller.js';
import {toggleProductsStatuses} from "../controllers/products.controller.js";

const productsRoutes = express.Router();

productsRoutes.get('/', productsController.getProducts);
productsRoutes.post('/', productsController.createProduct);
productsRoutes.delete('/:id', productsController.deleteProduct);
productsRoutes.put('/:id', productsController.updateProduct);
productsRoutes.patch('/:id', productsController.updateProductStatus);
productsRoutes.delete('/', productsController.deleteProducts);
productsRoutes.patch('/', productsController.toggleProductsStatuses);

export default productsRoutes;

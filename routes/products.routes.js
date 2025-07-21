import express from 'express';
import * as productsController from '../controllers/products.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/api/products', productsController.getProducts);
router.get('/api/products/:id', productsController.getProduct);
router.post('/api/products/create', authenticateToken, productsController.createProduct);
router.delete('/api/products/:id', authenticateToken, productsController.deleteProduct);

export default router;

import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { createProducts, deleteProduct, updateProducts, getProductById, getProducts } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', authMiddleware, getProducts)

router.get('/:id', authMiddleware, getProductById)

router.post("/", authMiddleware, createProducts)

router.put("/:id", authMiddleware, updateProducts)

router.delete("/:id", authMiddleware, deleteProduct)

export default router;
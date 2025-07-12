import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { createProducts, deleteProduct, updateProducts, getProductById, getProducts } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', authMiddleware, authorizeRoles("customer", "admin"), getProducts)

router.get('/:id', authMiddleware, authorizeRoles( "admin"), getProductById)

router.post("/", authMiddleware, authorizeRoles("admin"), createProducts)

router.put("/:id", authMiddleware, authorizeRoles("admin"), updateProducts)

router.delete("/:id", authMiddleware, authorizeRoles("admin"), deleteProduct)

export default router;
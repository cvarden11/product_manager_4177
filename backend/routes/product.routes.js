import express from 'express';
import { createProducts, deleteProduct, updateProducts, getProductById, getProducts } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getProducts)

router.get('/:id', getProductById)

router.post("/", createProducts)

router.put("/:id", updateProducts)

router.delete("/:id", deleteProduct)

export default router;
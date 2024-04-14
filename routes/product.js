import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '../controllers/product.js';
const router = express.Router();

router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getProduct).post(updateProduct).delete(deleteProduct);

export default router;

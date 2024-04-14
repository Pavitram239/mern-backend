import product from '../models/product.js';
import Product from '../models/product.js';

export const getProducts = async (req, res) => {
  Product.find({})
    .then((products) => {
      if (products.length === 0) {
        console.log('no products found');
      }
      return res.status(200).json(products);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ msg: 'product not found' });
      }
      res.status(200).json(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createProduct = async (req, res) => {
  const { name, price, quantity, image } = req.body;
  product
    .create(req.body)
    .then((product) => {
      return res.status(201).json({
        msg: 'product created successfully',
        product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateProduct = async (req, res) => {
  res.json('update product');
};

export const deleteProduct = async (req, res) => {
  res.json('delete product');
};

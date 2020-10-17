import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';

// @desc    Fetch All products
// @route   GET request /api/products
// @access  Public
// access === some routes need token --> public route that anyone can handle
router.get(
	'/',
	asyncHandler(async (req, res) => {
		// mongoose .find method will return all Products --> returns as promise
		// adding middleware to handle this method --> express-async-handler

		// middleware is a function that has access to the req, res cycle
		const products = await Product.find({});
		res.json(products);
	})
);

// @desc    Fetch Single products
// @route   GET request /api/products/:id/
// @access  Public
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);

		if (product) {
			res.json(product);
		} else {
			res.status(404);
			throw new Error('Product not found');
		}
	})
);

export default router;

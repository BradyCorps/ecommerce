import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js'; // ES6 modules need .js suffix

// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
dotenv.config();

const app = express();

app.get('/', (req, res) => {
	res.send('API is running');
});
app.get('/api/products', (req, res) => {
	res.json(products);
});
app.get('/api/products/:id', (req, res) => {
	const product = products.find(p => p._id === req.params.id);
	res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server in ${process.env.NODE_ENV} mode on ${PORT}`)
);

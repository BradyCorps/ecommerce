import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';

// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
	res.send('API is running');
});

// anything that goes to /api/products/ will be linked to productRoutes
app.use('/api/products', productRoutes);

// creating custom error middleware

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold)
);

// seeder not connected to DB

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

// dealing with mongoose === returns as promise --> need async await
const importData = async () => {
	try {
		// nothing passed in === this will delete everything --> mongoose method that returns promise use await
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		// passes in User data FROM users.js found in line 6
		// connection between product and users --> admin user to be object ID for all products
		// creating variable called createdUsers that will be an array of the createdusers
		const createdUsers = await User.insertMany(users);

		// adminUser === first item in array as it is the first item in the users.js
		const adminUser = createdUsers[0]._id;

		// map array === creates new array with the results of calling a function for every array element
		// IE map() takes 2 arguments map(a callback, and optional context) which is considered 'this' in an arrow function.
		// The callback runs for each value in the array and returns each new value in a resulting array.
		// Below means === for each product return an object with the info in the products.js file already (using a spread operator)
		// in addition add to the user field the Admin user
		const sampleProducts = products.map(product => {
			return { ...product, user: adminUser };
		});

		// re-inserting into Product the sampleProduct array WITH admin user
		await Product.insertMany(sampleProducts);

		console.log('Data Imported!'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

const destoryData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		console.log('Data Destoryed!'.red.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

// node command line containing an array of arguments passed in
// if process.argv is equal to -d === destory data else import data
// npm script of this found in package.json
if (process.argv[2] === '-d') {
	destoryData();
} else {
	importData();
}

import mongoose from 'mongoose';

// When dealing with mongo.db (using .connect, .find, etc) --> returning a promise --> await will make script wait until promise is fulfilled (ie. the async)
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});

		console.log(`Mongo DB Connected: ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.error(`Error: ${error.message.red.bold}`);
		process.exit(1);
	}
};

export default connectDB;

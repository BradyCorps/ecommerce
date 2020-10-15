import mongoose from 'mongoose';

// Schema === organization of data that determines and constructs the specifics of a database (ie --> standardizes the database so there are no outliers in the data structure)
const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},

		//
		email: {
			type: String,
			required: true,
			// Specifies unique index on property (ie only 1 use)
			unique: true,
		},

		//
		password: {
			type: String,
			required: true,
		},

		//
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', userSchema);

export default User;

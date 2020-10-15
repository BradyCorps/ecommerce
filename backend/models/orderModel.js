import mongoose from 'mongoose';

// Schema that is passed through to database
const orderSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},

		// mongoose allows for arrays of SchemaTypes --> as seen below === a schema within a schema
		orderItems: [
			{
				name: { type: String, required: true },
				qty: { type: Number, required: true },
				image: { type: String, required: true },
				price: { type: Number, required: true },
				product: {
					type: mongoose.Schema.Types.ObjectId,
					required: true,
					ref: 'Product',
				},
			},
		],

		// Mongoose will see parents as strings if not defined at object first (ex ShippingAddress: type: String).
		// To define as an object with a property type wrap in curly braces after declaring type
		// below shows shippingAddress is an object that contaiins the SchemaType options, rather than ShippingAddress being a path of type string
		shippingAddress: {
			address: { type: String, required: true },
			city: { type: String, required: true },
			postalCode: { type: String, required: true },
			country: { type: String, required: true },
		},

		//
		paymentMethod: {
			type: String,
			required: true,
		},

		//
		paymentResult: {
			id: { type: String },
			status: { type: String },
			update_time: { type: String },
			emailAddress: { type: String },
		},

		//
		taxPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},

		//
		shippingPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},

		//
		totalPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},

		//
		isPaid: {
			type: Boolean,
			required: true,
			default: false,
		},

		//
		paidAt: {
			type: Date,
		},

		//
		isDelivered: {
			type: Boolean,
			required: true,
			default: false,
		},

		//
		deliveredAt: {
			type: Date,
		},
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model('Order', orderSchema);

export default Order;

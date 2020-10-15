// Installed bcryptjs to hash(encrypt) passwords
// Different ways to hash passwords [
// normally done asyncranously
// this data === imported data
// using hashsync method --> hashing passwords syncranously
// ]
import bcrypt from 'bcryptjs';

// Sample User Data for MongoDB --> one is Admin
// Data ALWAYS must equal what is shown in Schema Models

const users = [
	{
		name: 'Admin User',
		email: 'admin@mainadmin.ca',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},

	//
	{
		name: 'Brady Corps',
		email: 'brady@bradycorps.ca',
		password: bcrypt.hashSync('123456', 10),
	},

	//
	{
		name: 'Sydney Nicholauson',
		email: 'sydney@sydneyn.ca',
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	email: {
		type: String,
		require: true,
		lowercase: true,
		unique: true,

	},
	password: {
		type: String,
		require: true,
	},
	firstName: {
		type: String,
		require: true,
		trim: true,
	},
	lastName: {
		type: String,
		require: true,
		trim: true,
	},
	emailVerified: {
		type: Boolean,
		default: false,
	}
});

mongoose.model('user', UserSchema, 'users');



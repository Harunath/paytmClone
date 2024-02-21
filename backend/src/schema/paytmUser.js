const mongoose = require("mongoose");

const paytmUserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
		minLength: 3,
		maxLength: 30,
	},
	password: {
		type: String,
		// required: true,
		// minLength: 3,
		// maxLength: 30,
	},
	firstName: {
		type: String,
		// required: true,
		// minLength: 3,
		// maxLength: 15,
	},
	lastName: {
		type: String,
		// required: true,
		// minLength: 3,
		// maxLength: 15,
	},
	// dob: {
	// 	type: Date,
	// 	required: true,
	// },
	phone: {
		type: Number,
		// required: true,
		// unique: true,
		// minLength: 10,
		// maxLength: 10,
	},
});

const paytmuser = mongoose.model("paytmuser", paytmUserSchema);

module.exports = paytmuser;

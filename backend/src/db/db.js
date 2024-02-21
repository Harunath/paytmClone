const mongoose = require("mongoose");

const mongoConnection = async () => {
	await mongoose
		.connect(
			`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.h3djrbd.mongodb.net/`
		)
		.then(() => {
			console.log("Mongo connected successfully");
		})
		.catch((e) => {
			throw e;
		});
};

module.exports = {
	mongoConnection,
};

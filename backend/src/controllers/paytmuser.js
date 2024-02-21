const { findOne, find } = require("../services/paytmuser/get");
const { create } = require("../services/paytmuser/post");

const createUser = async (req, res) => {
	try {
		console.log("createUser is running");
		const { username, password, firstName, lastName, phone } = req.body;
		console.log(username + " " + password);
		res.json(await create(username, password, firstName, lastName, phone));
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
};

const findUser = async (req, res) => {
	console.log("this is find user");
	const { phone } = req.params;
	console.log(phone);
	res.json(await findOne(phone));
};

const findAll = async (req, res) => {
	const msg = await find();
	res.json({ msg: msg });
};

module.exports = {
	createUser,
	findUser,
	findAll,
};

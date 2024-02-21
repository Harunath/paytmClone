const paytmuser = require("../../schema/paytmUser");

const findOne = async (phone) => {
	console.log(await paytmuser.findOne({ phone: phone }));
	return await paytmuser.findOne({ phone: phone });
};

const find = async () => {
	console.log("find is working");
	// const user = await paytmuser.findOne({ phone: phone });
	return "this is not allows";
};

module.exports = {
	findOne,
	find,
};

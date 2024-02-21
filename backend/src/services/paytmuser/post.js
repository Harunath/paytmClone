const paytmuser = require("../../schema/paytmUser");

const create = async (username, password, firstName, lastName, phone) => {
	return await paytmuser.create({
		username: username,
		password: password,
		firstName: firstName,
		lastName: lastName,
		phone: phone,
	});
};

module.exports = {
	create,
};

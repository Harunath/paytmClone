const { Router } = require("express");
const { createUser, findUser, findAll } = require("../controllers/paytmuser");

const paytmUserRoute = Router();

paytmUserRoute.post("/", createUser);
paytmUserRoute.get("/:phone", findUser);
paytmUserRoute.get("/", findAll);

module.exports = paytmUserRoute;

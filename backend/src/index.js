const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
const { mongoConnection } = require("../src/db/db");
const paytmUserRoute = require("./routes/paytmuser");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoConnection();

const port = process.env.PORT || 8080;
app.use("/paytmuser", paytmUserRoute);
app.get("/", (req, res) => {
	res.send({ msg: "working" });
});

app.listen(port, () => {
	console.log("app is running on - " + `http://localhost:${port}/`);
});

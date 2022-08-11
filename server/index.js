const express = require("express");
const app = express();
const port = 5000;

const bodyParser = require("body-parser");

const config = require("./config/key");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/users", require("./routes/users"));
app.use("/api/favorite", require("./routes/favorite"));

const mongoose = require("mongoose");
mongoose
	.connect(config.mongoURI)
	.then(() => console.log("MongoDB Connected.."))
	.catch((err) => console.log(err));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

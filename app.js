const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Middleware
app.use(bodyParser.json());

// Set view engine to use ejs
app.set("view engine", "ejs");

// Handle public
app.use("/public", express.static("./public"));

// Handle All Routes
app.use("/", require("./routes/routes"));

app.listen(3000, () => {
    console.log("App online at: http://localhost:3000");
})
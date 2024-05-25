const express = require("express");
const router = express.Router();

// Controllers:
const httpMethods = require("../controllers/httpMethods");

// View Pages:
router.get("/", (req, res) => {
    return res.render("home");
})

// Routes:
router.get("/handleRequest", httpMethods.httpHandler);

module.exports = router;
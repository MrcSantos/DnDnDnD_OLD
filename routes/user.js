var express = require('express');
var router = express.Router();

/* GET Login page. */
router.get('/', (req, res) => {
	res.redirect("/user/login")
});

/* GET Login page. */
router.get('/login', (req, res) => {
	res.render("user/login", { title: "Login" })
});

/* GET Register page. */
router.get('/register', (req, res) => {
	res.render("user/register", { title: "Register" })
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET Info page. */
router.get('/info', (req, res) => {
	res.render("info", { title: "Info" })
});

/* GET Home page. */
router.get('/', (req, res) => {
	res.render("index", { title: "Home", user: req.user })
});

module.exports = router;

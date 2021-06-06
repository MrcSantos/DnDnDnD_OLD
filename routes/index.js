var express = require('express');
var router = express.Router();

/* GET Info page. */
router.get('/info', (req, res) => {
	res.render("info", { title: "Info" })
});

/* GET home page. */
router.get('/', (req, res) => {
	res.render("index", { title: "Home" })
});

module.exports = router;

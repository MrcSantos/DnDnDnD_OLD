var express = require('express');
var router = express.Router();

/* GET Info page. */
router.get('/', (req, res) => {
	res.redirect("/characters/search")
});

/* GET home page. */
router.get('/search', (req, res) => {
	res.render("characters/search", { title: "Characters" })
});

module.exports = router;

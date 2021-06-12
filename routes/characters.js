var express = require('express');
var router = express.Router();

/* GET Search page. */
router.get('/', (req, res) => {
	res.redirect("/characters/search")
});

/* GET Search page. */
router.get('/search', (req, res) => {
	res.render("characters/search", { title: "Characters" })
});

module.exports = router;

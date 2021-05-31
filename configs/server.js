require('colors')
const env = require('dotenv').config()
const express = require('express')
const path = require('path');

const port = process.env.PORT ?? 3000

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../public')));

const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs');
app.set('layout', 'layout')
app.use(expressLayouts)


//--------------------------------------------------//--------------------------------------------------// Server listening

app.listen(port, () => {
	if (env.error) {
		return console.log(`\n[WARNING] App listening at http://localhost:${port} but environment has not been loaded correctly\nERROR: ${env.error.message}\n`.yellow)
	}

	if (process.env.SECRET == null) {
		return console.log(`\n[WARNING] App listening at http://localhost:${port} but environment has not been loaded correctly\nERROR: Missing SECRET env propriety\n`.yellow)
	}

	console.log(`\n[DONE] App listening at http://localhost:${port}\n`.green)
})

module.exports = { app: app }

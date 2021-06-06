const app = require("./configs/server").app;

//--------------------------------------------------//--------------------------------------------------// Routes

app.get('/info', (req, res) => {
	res.render("info", { title: "Info" })
})

app.get('/', (req, res) => {
	res.render("index", { title: "HOME" })
})

//--------------------------------------------------//--------------------------------------------------// Error catch

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	res.render("wip", { title: "404" })
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status ?? 500);
	res.render('error');
});

module.exports = app;

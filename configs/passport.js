const db = require('./db').db;
const app = require('./server').app;

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const auth_messages = {
	ERROR: '-1',
	OK: '0',
	USER: '1',
	PASS: '2',
	PENDING: '3'
}

passport.use(new LocalStrategy({ usernameField: 'name', passwordField: 'pass' }, (name, pass, done) => {
	db.connect(err => {
		if (err) { return done(err, false, { message: auth_messages.ERROR }) }

		const users = db.db("Manager").collection("Users");
		users.findOne({ $or: [{ name: name }, { email: name }] }, (err, user) => {
			if (err) { return done(err, false, { message: auth_messages.ERROR }) }

			if (!user) { return done(null, false, { message: auth_messages.USER }) }

			if (user.pending) { return done(null, false, { message: auth_messages.PENDING }) }
			if (user.pass !== pass) { return done(null, false, { message: auth_messages.PASS }) }

			return done(null, user)
		})
	})
}));

// passport serialize and deserialize
passport.serializeUser((user, done) => {
	done(null, user._id)
})

passport.deserializeUser((id, done) => {
	db.connect(err => {
		if (err) { done(err) }

		const users = db.db("Manager").collection("Users");
		users.findOne({ _id: id }, (err, user) => {
			if (err) { done(err) }

			done(null, user)
		})
	})
})

app.use(passport.initialize());
app.use(passport.session());

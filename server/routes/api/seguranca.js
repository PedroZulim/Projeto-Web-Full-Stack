const {ObjectID} = require("mongodb");

const COLLECTION = 'ships';

exports.addRoutes = function(app, db, buscarMongoDB) {

	app.post('/login', (req, res) => {
		const session = req.session;
		const {username, password} = req.body
		session.username = username
		session.password = password
		res.send('Successfully logged in!')
	});

	app.get('/logout', (req, res) => {
		req.session.destroy(err => {
			if (err) {
				return console.log(err);
			}
			res.redirect('/')
		});
	});

}

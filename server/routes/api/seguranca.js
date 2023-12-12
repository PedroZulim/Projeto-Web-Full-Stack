const {ObjectID} = require("mongodb");
const auth = require("./auth");
const jwt = require('jsonwebtoken')
// const bcrypt = require("bcrypt");

const COLLECTION = 'users';

exports.addRoutes = function(app, config) {

// free endpoint
	app.get("/api/free-endpoint", (req, res) => {
		res.json({message: "You are free to access me anytime"});
	});

// authentication endpoint
	app.get("/api/auth-endpoint", auth.checkToken, (req, res) => {
		res.send({message: "You are authorized to access me"});
	});

// The verify endpoint that checks if a given JWT token is valid
	app.post('/api/verify', (req, res) => {
		const tokenHeaderKey = "jwt-token";
		const authToken = req.headers[tokenHeaderKey];
		try {
			const verified = jwt.verify(authToken, config.jwtSecretKey);
			if (verified) {
				return res
					.status(200)
					.json({ status: "logged in", message: "success" });
			} else {
				// Access Denied
				return res.status(401).json({ status: "invalid auth", message: "error" });
			}
		} catch (error) {
			// Access Denied
			return res.status(401).json({ status: "invalid auth", message: "error" });
		}

	})

// register endpoint
	app.post("/api/register", async (req, res) => {
		const email = req.body.email;
		const password = req.body.password;
		hashedPassword = password
		const dbConnection = config.db.collection(COLLECTION);

		const objNovo = {
			email: email,
			password: hashedPassword,
		};

		let resultado = await dbConnection.insert(objNovo, null);

		if (resultado.result && resultado.result.ok !== 1) {
			resultado = '{ "message" : "Document not INSERT 1"}';
			res.status(404).json(resultado);
		} else {
			// adicionar websock para avisar todos usuarios.
			resultado = {"message": "Document inserted!"};
			res.status(200).json(resultado);
		}

	});

	app.post("/api/login", async (req, res) => {

		filtro = {email: req.body.email};
		fields = {};
		sort = {};

		const dbConnection = config.db.collection(COLLECTION);

		resultado = await config.buscarMongoDB(dbConnection, filtro, fields, sort);
		const user = resultado[0];
		if (!user) {
			return res.status(400).send({
				message: "Usuario não encontrado"
			});
		} else {
			try {
				passwordCheck = (req.body.password === user.password);
				// check if password matches
				if (!passwordCheck) {
					return res.status(400).send({
						message: "Senha invalida"
					});
				}
				//   create JWT token
				const token = jwt.sign(
					{
						userId: user._id,
						userEmail: user.email,
					},
					config.jwtSecretKey,
					{expiresIn: "24h"}
				);

				//   return success res
				res.status(200).send({
					message: "Login Successful",
					email: user.email,
					token,
				});

			} catch (error) {
				res.status(404).send({
					message: "Email não valido",
					error,
				});
			}
		}
	});

	app.get('/api/logout', (req, res) => {
		req.session.destroy(err => {
			if (err) {
				return console.log(err);
			}
			res.redirect('/')
		});
	});


}

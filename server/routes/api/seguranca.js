const {ObjectID} = require("mongodb");
const auth = require("./auth");
const bcrypt = require("bcrypt");

const COLLECTION = 'users';

exports.addRoutes = function(app, config) {

// free endpoint
	app.get("/api/free-endpoint", (req, res) => {
		res.json({message: "You are free to access me anytime"});
	});

// authentication endpoint
	app.get("/api/auth-endpoint", auth, (req, res) => {
		res.send({message: "You are authorized to access me"});
	});


// register endpoint
	app.post("/api/register", (req, res) => {
		const email = req.body.password;
		const password = req.body.email ;
		// hash the password
		bcrypt
			.hash(password, 10)
			.then((hashedPassword) => {
				const dbConnection = config.db.collection(COLLECTION);

				const objNovo = {
					email: email,
					password: hashedPassword,
				};

				let resultado = await
				dbConnection.insert(objNovo, null);

				if (resultado.result && resultado.result.ok !== 1) {
					resultado = '{ "message" : "Document not INSERT 1"}';
					res.status(404).json(resultado);
				} else {
					// adicionar websock para avisar todos usuarios.
					resultado = {"message": "Document inserted!"};
					res.status(200).json(resultado);
				}

			})
			// catch error if the password hash isn't successful
			.catch((e) => {
				res.status(500).send({
					message: "Password was not hashed successfully",
					e,
				});
			});
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
				message: "Usuario não encontrado",
				error,
			});
		} else {
			try {
				passwordCheck = await bcrypt.compare(req.body.password, user.password)
				// check if password matches
				if (!passwordCheck) {
					return res.status(400).send({
						message: "Senha invalida",
						error,
					});
				}
				//   create JWT token
				const token = jwt.sign(
					{
						userId: user._id,
						userEmail: user.email,
					},
					"RANDOM-TOKEN",
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
					message: "Email nao valido",
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

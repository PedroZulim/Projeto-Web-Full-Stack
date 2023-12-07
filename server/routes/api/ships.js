const {ObjectID} = require("mongodb");

exports.addRoutes = function (app, db, buscarMongoDB) {
	const COLLECTION = 'ships';

	app.post('/api/ships', async (req, res,) => {
		try {
			const dbConnection = db.collection(COLLECTION);

			const objNovo = req.body;

			let resultado = await
				dbConnection.insert(objNovo, null);

			if (resultado.result && resultado.result.ok !== 1) {
				resultado = '{ "message" : "Document not INSERT 1"}';
				res.status(404).json(resultado);
			} else {
				// adicionar websock para avisar todos usuarios.
				res.status(200).json(resultado);
			}

		} catch (error) {
			res.status(500).json(error);
		}
	});
	app.delete('/api/ships/:id', async (req, res,) => {
		try {
			const dbConnection = db.collection(COLLECTION);
			const objID = {id: new ObjectID(req.params.id)};

			let resultado = await dbConnection.remove(objID);
			if (resultado.result && resultado.result.ok !== 1) {
				resultado = '{ "message" : "Document not update 1"}';
				res.status(404).json(resultado);
			} else {
				// adicionar websock para avisar todos usuarios.
				res.status(200).json(resultado);
			}
		} catch (error) {
			res.status(500).json(error);
		}
	});

	app.put('/api/ships/:id', async (req, res,) => {
		try {
			const dbConnection = db.collection(COLLECTION);

			let objAtualizar = req.body;
			objAtualizar = {$set: objAtualizar};
			const objParametros = {
				'safe': true,
				'upsert': true
			};
			const objID = {id: new ObjectID(req.params.id)};
			let resultado = await dbConnection.update(objID, objAtualizar, objParametros);
			if (resultado.result && resultado.result.ok !== 1) {
				resultado = '{ "message" : "Document not update 1"}';
				res.status(404).json(resultado);
			} else {
				// adicionar websock para avisar todos usuarios.
				res.status(200).json(resultado);
			}
		} catch (error) {
			res.status(500).json(error);
		}
	});

	app.get('/api/ships/:id', async (req, res,) => {
		try {
			query = {id: new ObjectID(req.params.id)};
			fields = {};
			sort = {};

			const dbConnection = db.collection(COLLECTION);

			resultado = await buscarMongoDB(dbConnection, query, fields, sort);
			res.status(200).json(resultado);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	app.get('/api/ships', async (req, res,) => {
		try {
			query = {};
			fields = {};
			sort = {};

			const dbConnection = db.collection(COLLECTION);

			resultado = await buscarMongoDB(dbConnection, query, fields, sort);
			res.status(200).json(resultado);
		} catch (error) {
			res.status(500).json(error);
		}
	});
}

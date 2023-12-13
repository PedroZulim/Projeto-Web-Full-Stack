const {ObjectID} = require("mongodb");
const {query, body, param, validationResult} = require('express-validator');
const auth = require("./auth");


exports.addRoutes = function(app, config) {
	const COLLECTION = 'ships';

	app.post('/api/ships', body('name').isLength({min: 3}), body('year_built').isInt().toInt(),
		auth.checkToken, async (req, res,) => {
		try {
			const validation = validationResult(req);
			if (!validation.isEmpty()) {
				message = '';
				for (const error of validation.errors) {
					message += 'Campo [' + error.path + '] ' + error.msg + ' - ';
				}
				return res.status(400).json({message: message});
			}

			const dbConnection = config.db.collection(COLLECTION);

			const objNovo = req.body;

			objNovo.name = req.sanitize(objNovo.name);

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

		} catch (error) {
			res.status(500).json(error);
		}
	});
	app.delete('/api/ships/:id', auth.checkToken, param('id').isLength({
		min: 24,
		max: 24
	}), async (req, res,) => {
		try {
			const dbConnection = config.db.collection(COLLECTION);
			const objID = {_id: new ObjectID(req.params.id)};

			let resultado = await dbConnection.remove(objID);
			if (resultado.result && resultado.result.ok !== 1) {
				resultado = {"message": "Document not deleted"};
				res.status(404).json(resultado);
			} else {
				// adicionar websock para avisar todos usuarios.
				resultado = {"message": "Document deleted!"};
				res.status(200).json(resultado);
			}
		} catch (error) {
			res.status(500).json(error);
		}
	});

	app.put('/api/ships/:id',  auth.checkToken, async (req, res,) => {
		try {
			const dbConnection = config.db.collection(COLLECTION);

			let objAtualizar = req.body;
			delete objAtualizar._id;
			objAtualizar = {$set: objAtualizar};
			const objParametros = {
				'safe': true,
				'upsert': true
			};
			const objID = {_id: new ObjectID(req.params.id)};
			let resultado = await dbConnection.update(objID, objAtualizar, objParametros);
			if (resultado.result && resultado.result.ok !== 1) {
				resultado = {"message": "Document not update 1"};
				res.status(404).json(resultado);
			} else {
				// adicionar websock para avisar todos usuarios.
				resultado = {"message": "Document updated!"};
				res.status(200).json(resultado);
			}
		} catch (error) {
			res.status(500).json(error);
		}
	});

	app.get('/api/ships/:id',  auth.checkToken, async (req, res) => {
		try {
			filtro = {_id: new ObjectID(req.params.id)};
			fields = {};
			sort = {};

			const dbConnection = config.db.collection(COLLECTION);

			resultado = await config.buscarMongoDB(dbConnection, filtro, fields, sort);
			res.status(200).json(resultado[0]);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	app.get('/api/ships',   auth.checkToken, async (req, res,) => {
		try {
			filtro = {};
			fields = {};
			sort = {};

			const dbConnection = config.db.collection(COLLECTION);

			resultado = await config.buscarMongoDB(dbConnection, filtro, fields, sort);
			res.status(200).json(resultado);
		} catch (error) {
			res.status(500).json(error);
		}
	});
}

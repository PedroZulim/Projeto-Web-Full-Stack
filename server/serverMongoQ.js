const createError = require("http-errors");
const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const cors = require("cors");
const ObjectID = require('mongodb').ObjectID;

const apiSeguranca = require('./routes/api/seguranca');
const apiShip = require('./routes/api/ships');
const apiRockets = require('./routes/api/rockets');

app.use(express.urlencoded({extended: true}));
app.use(cors());

const publicPath = path.join(__dirname, '..', 'my-app', 'build');

app.get('/', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

app.use(express.static(publicPath));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));


var mongoq = require('mongoq');
usuario = 'admin';
senha = 'admin';
urlMongo = '127.0.0.1:27017/pedro';

mongoDB = mongoq("mongodb://" + usuario + ":" + senha + "@" + urlMongo + "?reconnectWait=2000;retries=20");

app.use(function(req, res, next) {
	console.log('REQUEST - ', req.url);
	next();
});

buscarMongoDB = async function(dbConnection, query, fields, sort) {
	resultado = await
		dbConnection.find(query, fields).sort(sort).toArray();
	return resultado
}

// Adiciona rotas API Seguranca
apiSeguranca.addRoutes(app, mongoDB);
// Adiciona rotas API SHIP
apiShip.addRoutes(app, mongoDB, buscarMongoDB);
// Adiciona rotas API ROCKET
apiRockets.addRoutes(app, mongoDB, buscarMongoDB);


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
// 	res.status(404);
// });

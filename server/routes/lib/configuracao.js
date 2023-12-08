const path = require("path");
const mongoq = require('mongoq');
usuario = 'admin';
senha = 'admin';
urlMongo = '127.0.0.1:27017/pedro';

const config = {
	publicPath: path.join(__dirname, '..', '..', 'my-app', 'build'),
	db: mongoq("mongodb://" + usuario + ":" + senha + "@" + urlMongo + "?reconnectWait=2000;retries=20"),
	buscarMongoDB: async function(dbConnection, query, fields, sort) {
		resultado = await
			dbConnection.find(query, fields).sort(sort).toArray();
		return resultado
	}
}
module.exports = config;

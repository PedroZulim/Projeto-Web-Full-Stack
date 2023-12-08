const path = require("path");
const mongoq = require('mongoq');
const fs = require("fs");
const winston = require("winston");

const usuario = 'admin';
const senha = 'admin';
const urlMongo = '127.0.0.1:27017/pedro';

const key = fs.readFileSync(path.join(__dirname, '..', 'certs', 'pedro.key'));
const cert = fs.readFileSync(path.join(__dirname, '..', 'certs', 'pedro.crt'));

const config= {
	publicPath: path.join(__dirname, '..', '..', 'my-app', 'build'),
	db: mongoq("mongodb://" + usuario + ":" + senha + "@" + urlMongo + "?reconnectWait=2000;retries=20"),
	buscarMongoDB: async function(dbConnection, query, fields, sort) {
		resultado = await
			dbConnection.find(query, fields).sort(sort).toArray();
		return resultado
	},
	serverOptions: {
		key: key,
		cert: cert
	},
	logger: winston.createLogger({
		level: 'info',
		format: winston.format.json(),
		defaultMeta: {service: 'user-service'},
		transports: [
			new winston.transports.File({filename: '../logs/error.log', level: 'error'}),
			new winston.transports.File({filename: '../logs/combined.log'}),
		],
	})
}

if (process.env.NODE_ENV !== 'production') {
	config.logger.add(new winston.transports.Console({
		format: winston.format.simple(),
	}));
}
module.exports = config;

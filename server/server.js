const createError = require("http-errors");
const express = require('express');
const session = require('express-session');
const rateLimit = require("express-rate-limit");
const expressSanitizer = require('express-sanitizer');
// const expressValidator = require('express-validator');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require('body-parser');
const config = require('./lib/configuracao');
const https = require('https');
const fs = require('fs');

const apiSeguranca = require('./routes/api/seguranca');
const apiShip = require('./routes/api/ships');
const apiRockets = require('./routes/api/rockets');
const auth = require("./routes/api/auth");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());
// app.use(expressValidator());
app.use(cors());
// Mount express-sanitizer middleware here
app.use(expressSanitizer());


app.get('/', (req, res) => {
	res.sendFile(path.join(config.publicPath, 'index.html'));
});

app.use(express.static(config.publicPath));


app.use(function(req, res, next) {
	console.log('REQUEST - ', req.url);
	next();
});


// --- Rate Limiter
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
})
app.use(limiter);

// Adiciona rotas API Seguranca
apiSeguranca.addRoutes(app, config);
// Adiciona rotas API SHIP
apiShip.addRoutes(app, config);
// Adiciona rotas API ROCKET
apiRockets.addRoutes(app, config);

// Iniciar HTTPS server
var server = https.createServer(config.serverOptions, app);

//Logs with Winston
server.listen(port, () => {
	const msg = 'Servidor https na porta ' + port + ' iniciado';
	console.log(msg)
	config.logger.info(msg);
});

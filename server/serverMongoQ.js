const createError = require("http-errors");
const express = require('express');
const session = require('express-session');
const rateLimit = require("express-rate-limit");
const expressSanitizer = require('express-sanitizer');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const cors = require("cors");
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser')
const config = require('./lib/configuracao')


const apiSeguranca = require('./routes/api/seguranca');
const apiShip = require('./routes/api/ships');
const apiRockets = require('./routes/api/rockets');



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());
// Mount express-sanitizer middleware here
app.use(expressSanitizer());


app.get('/', (req, res) => {
	res.sendFile(path.join(config.publicPath, 'index.html'));
});

app.use(express.static(config.publicPath));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log('Listening on port ' + port));

app.use(function(req, res, next) {
	console.log('REQUEST - ', req.url);
	next();
});


// --- Rate Limit
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
})
// Apply the rate limiting middleware to all requests.
app.use(limiter);

// Adiciona rotas API Seguranca
apiSeguranca.addRoutes(app, config);
// Adiciona rotas API SHIP
apiShip.addRoutes(app, config);
// Adiciona rotas API ROCKET
apiRockets.addRoutes(app, config);

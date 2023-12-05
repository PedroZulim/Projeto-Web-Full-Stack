const mongoq = require('mongoq');
const createError = require("http-errors");
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const cors = require("cors");
const publicPath = path.join(__dirname , '..', 'my-app', 'build');


app.use(cors());

app.get('/', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

app.use(express.static(publicPath));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

usuario = 'pedrozulim';
senha = 'pedro123';
urlMongo = 'pedro.vwve1zm.mongodb.net/Projeto-Web';

db = mongoq("mongodb+srv://" + usuario + ":" + senha + "@" + urlMongo + "?reconnectWait=2000;retries=20");
COLLECTION = 'Ships';
let collectionPUT = db.collection(COLLECTION);
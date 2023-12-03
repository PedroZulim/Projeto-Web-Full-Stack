var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

module.exports = router;

// app.use("/api", aPIRouter);

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/../', 'build', 'index.html'));
});

app.use("/", indexRouter);

app.use('/Projeto-Web-Full-Stack/static',express.static(path.join(__dirname + '/../', 'build/static')));

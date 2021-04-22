var express = require('express'),
	cors = require('cors');
	

module.exports = app;

// TODO 2 

var app = express();

app.use(cors());

app.get('/', function(req, res){
	res.send('Some response for accessing the root');
});

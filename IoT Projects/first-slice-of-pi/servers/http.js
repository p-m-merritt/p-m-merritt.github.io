var express = require('express'),
	cors = require('cors');
	
// TODO 2 
	var app = express();
	app.use(cors());

	app.get('/', function(req, res){
		res.send('Some response for accessing the root');
	});

//TODO 4
	//Task 2
		var actuatorRoutes = require('./../routes/actuators');
		app.use('/pi/sensors', sensorRoutes);

// // // // // //

module.exports = app;
var express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model');


// TODO 3 cont.
	// Task 1
		router.route('/').get(function (req, res, next) {
			res.send(resources.pi.sensors);
		});

		router.route('/dht').get(function (req, res, next) {
			res.send(resources.pi.sensors.dht);
		});

		router.route('/pir').get(function (req, res, next) {
			res.send(resources.pi.sensors.pir);
		});

		router.route('/temperature').get(function (req, res, next) {
			res.send(resources.pi.sensors.dht.temperature);
		});

const app = require('../servers/http');

// TODO 4
app.use('/pi/sensors', sensorRoutes);


module.exports = router;
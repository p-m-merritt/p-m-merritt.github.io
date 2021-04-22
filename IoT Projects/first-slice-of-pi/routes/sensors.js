// TODO 3
var sensorRoutes = require('./../routes/sensors');

// TODO 4
var actuatorRoutes = require('./../routes/actuators');

////////

var express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model');



module.exports = router;

////////

// TODO 3 cont.

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

app.use(cors());
app.use('/pi/sensors', sensorRoutes);

// TODO 4
app.use('/pi/sensors', sensorRoutes);

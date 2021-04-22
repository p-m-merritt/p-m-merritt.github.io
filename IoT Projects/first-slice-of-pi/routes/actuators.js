var express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model');

	

module.exports = router;

const app = require('../servers/http');

//TODO 4

router.route('/').get(function (req, res, next) {
	res.send(resources.pi.sensors);
});

router.route('/leds').get(function(req, res, next){
	res.send(resources.pi.actuators.leds);
});

router.route('/leds/:id').get(function(req, res, next){
	res.send(resources.pi.actuators.leds[req.params.id]);
});

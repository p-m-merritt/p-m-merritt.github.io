var resources = require('./../../resources/model');
var Gpio = require('onoff').Gpio;

var sensor;
var device = resources.pi.sensors.pir;

// TODO 4

router.route('/leds/:id').get(function (req, res, next) {
    resources.send(resources.pi.actuators.leds[req.params.id]);
});

function connectHardware(){
    new Gpio(device.gpio, 'in', 'both')

    device.value = !!value;
}

function start(){
    exports.start = function (params) {};

}

function stop(){
    sensor.unexport();
}

var pirPlugin = require('./plugins/internal/pirPlugin');

pirPlugin.start({});

pirPlugin.stop();

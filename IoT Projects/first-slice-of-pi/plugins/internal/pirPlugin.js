var resources = require('./../../resources/model');
var Gpio = require('onoff').Gpio;

var sensor;
var device = resources.pi.sensors.pir;

// TODO 4
    // Task 4
        pirPlugin.start({});



    router.route('/leds/:id').get(function (req, res, next) {
        resources.send(resources.pi.actuators.leds[req.params.id]);
    });

// TODO 5
    // Task 1 (DONE)
        function connectHardware(){
            new Gpio(device.gpio, 'in', 'both')
            device.value = !!value;
        }

    // Task 2 (DONE)
        function start(){
            exports.start = function (params) {
                connectHardware()
            };
        }

    // Task 3 (DONE)
        function stop(){
            sensor.unexport();
        }

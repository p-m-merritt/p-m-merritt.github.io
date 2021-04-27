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

        // Task 1

            function connectHardware(){
                new Gpio(device.gpio, 'in', 'both')

                device.value = !!value;
            }

        // Task 2

            function start(){
                exports.start = function (params) {};

            }

        // Task 3
        
            function stop(){
                sensor.unexport();
            }

        // Task 4
            var pirPlugin = require('./plugins/internal/pirPlugin');



            pirPlugin.stop();

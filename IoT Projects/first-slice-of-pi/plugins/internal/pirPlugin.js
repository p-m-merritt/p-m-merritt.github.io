var resources = require('./../../resources/model');
var Gpio = require('onoff').Gpio;

var sensor;
var device = resources.pi.sensors.pir;

// TODO 5
    // Task 1 (DONE)
        function connectHardware(){
            new Gpio(device.gpio, 'in', 'both')
            device.value = !!value;
        }

    // Task 2 (DONE)
        exports.start = function (params) {
            connectHardware()
        };

    // Task 3 (DONE)
        exports.stop = function () {
            sensor.unexport()
        };
        
    

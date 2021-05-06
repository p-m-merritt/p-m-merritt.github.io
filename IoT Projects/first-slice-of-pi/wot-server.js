var httpServer = require('./servers/http'),
	resources = require('./resources/model');

var server = httpServer.listen(resources.pi.port, function () {
	console.log("Running the Pi on port " + resources.pi.port);
});

process.on('SIGINT', function() {
	process.exit();
});

// TODO 5 cont.
    // Task 4 (DONE)
		var pirPlugin = require('./plugins/internal/pirPlugin');

		pirPlugin.start({});
		pirPlugin.stop();

// TODO 6 cont.
    // Task 4 (DONE)
		dhtPlugin.start({'frequency': 2000});
		dhtPlugin.stop();
		process.exit()
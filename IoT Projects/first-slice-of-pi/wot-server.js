var httpServer = require('./servers/http'),
	resources = require('./resources/model');

var server = httpServer.listen(resources.pi.port, function () {
	console.log("Running the Pi on port " + resources.pi.port);
});

process.on('SIGINT', function() {
	process.exit();
});

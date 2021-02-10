var http = require("http");
var port = 8686;

http.createServer(function(req,res){
  // handle response
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello ');
  res.end('World!');
}).listen(port);

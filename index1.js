const http = require("http");
const hostname = "localhost";
const port = 8000;
const myServer = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write("Hello Wasim! Welcome in Node.js");
    console.log(request.url);
	response.end();
});

myServer.listen(port,hostname);
//console.log("Hello World")


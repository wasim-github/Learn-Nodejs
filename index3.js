const express = require("express");
const port = 8000;
const app = express();

app.get('/', function(request,response){

    response.send("Hello Wasim. You are in root routes");
})

app.get('/aboutus', function(request,response){

    response.send("You are in about us routes");
})

app.get('/items/:itemnumber', function(request,response){

    response.send("You are seaching for item number " + request.params.itemnumber);
})

app.listen(port);


const express = require("express");
const port = 8000;
const app = express();

app.get('/',function(request,response){

    response.send("Hello Wasim. How are you");
})
app.listen(port);


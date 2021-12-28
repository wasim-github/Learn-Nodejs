const express = require("express");
const port = 8000;
const app = express();
const routes = require("./routes");

routes(app);


app.listen(port, ()=> console.log("app is running on port 8000"));
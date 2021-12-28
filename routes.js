module.exports = function(app){
let controller = require("./controllers")
app.get('/', controller.getdefault);
//
app.get('/aboutus', controller.aboutus);
//
app.get('/items/:itemnumber', controller.items);
}
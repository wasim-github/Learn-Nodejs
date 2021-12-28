exports.getdefault = function(request,response){
    response.send("You are in root route. Sending response from root route");
    console.log(request.url);
}
//
exports.aboutus = function(request,response){
    response.send("You are in aboutsus routes");
    console.log(request.url);
}
//
exports.items = function(request,response){
    response.send("You are seaching for item number " + request.params.itemnumber);
    console.log(request.url);
}
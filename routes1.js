module.exports = function(app){

    app.get('/', function(request,response){
        //response.writeHead(200, {'Content-Type' : 'text/html'});
        response.send("You are in root route. Sending response from root route");
        console.log(request.url);
    })
    //
    app.get('/aboutus', function(request,response){
    
        response.send("You are in aboutsus routes");
    })
    //
    app.get('/items/:itemnumber', function(request,response){
    
        response.send("You are seaching for item number " + request.params.itemnumber);
    })
        
    }
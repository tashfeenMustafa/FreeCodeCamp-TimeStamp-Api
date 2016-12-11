var express = require('express')

var app = express()

app.get('/:id', function(request, response) {
    var url = request.url
    var path = request.path
    
    var dateString = path;

    while( dateString.charAt( 0 ) === '/' )
    dateString = dateString.slice( 1 );
    
    response.send(dateString)
    
})

app.listen('8080', function() {
    console.log('App listening on port 8080');
})
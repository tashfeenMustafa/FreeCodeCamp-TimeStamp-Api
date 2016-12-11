var express = require('express')
var moment = require('moment')

var app = express()

app.get('/:id', function(request, response) {
    var url = request.url
    var path = request.path
    
    var dateString = path;

    while( dateString.charAt( 0 ) === '/' )
    dateString = dateString.slice( 1 );
    
    //Check if dateString contains '%20'
    if(dateString.includes("%20"))
    {
        // Replace '%20' with ' '
        var naturalDate = dateString.split("%20").join(" ")
        console.log("Here")
        console.log(naturalDate)
    }
    
    var unix = dateString
    
    // Check if dateString actually contains a timestamp in unix or natural language
    var m = moment(unix, "x") || moment(naturalDate, "MMMM DD, YYYY")
    
    // Return null if not a timestamp
    if(m.isValid)
    {
        response.send(dateString)
    }    
    else
        response.send("invalid date format")
    
    
})

app.listen('8080', function() {
    console.log('App listening on port 8080');
})
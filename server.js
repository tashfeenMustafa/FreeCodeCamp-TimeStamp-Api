var express = require('express')
var moment = require('moment')

var app = express()

app.get('/:id', function(request, response) 
{
    var naturalDate
    var ifNatural
    var ifUnix
    
    var url = request.url
    var path = request.path
    
    var dateString = path;
    
    // If dateString contains '/' at index 0, remove it
    while( dateString.charAt( 0 ) === '/' )
    dateString = dateString.slice( 1 );
    
    //Check if dateString contains '%20'
    if(dateString.includes("%20"))
    {
        // Replace '%20' with ' '
        naturalDate = dateString.split("%20").join(" ")
        
        // Check for naturalDate format
        if(naturalDate)
        {
            ifNatural = moment(naturalDate, "MMMM DD, YYYY")
        }    
    }
    else
    {
        // Check for unix timestamp format
        ifUnix = moment(dateString, "X")   
    }
    
    var unix, natural
    
    if(ifUnix)
    {
        // Convert to Natural Language Date
        natural = ifUnix.format("MMMM DD, YYYY")
        unix = dateString
    }
    else if(ifNatural)
    {
        unix = ifNatural.format("X")
        natural = naturalDate
    }
    else
    {
        return null
    }
    
    var dateObj = {
        unix: unix,
        natural: natural
    }
    
    return dateObj
    
})

app.listen('8080', function() 
{
    console.log('App listening on port 8080');
})
var express = require('express')
var moment = require('moment')
var path = require('path');


var app = express()

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.resolve(__dirname, 'client')));
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
        response.json({unix: null, natural: null})
    }
    
    var dateObj = {
        unix: unix,
        natural: natural
    }
    
    response.json(dateObj)
    return dateObj
})

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}...`);
})

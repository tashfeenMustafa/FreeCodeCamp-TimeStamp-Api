# FreeCodeCamp-TimeStamp-Api
The solution to FreeCodeCamp's Timestamp API. Please feel free to check it out. All the steps have been commented and easily understandable.

<h1>TimeStamp Microservice API</h1>
<p>This is a Timestamp Microservice API that accepts either a date in human readable format or in a unix timestamp and return an object containing the unix timestamp and the natural language date.</p>
      
<h3>Usage:</h3>

<pre>https://freecodecamp-timestamp-api.herokuapp.com/January 10, 2015</pre>
<pre>https://freecodecamp-timestamp-api.herokuapp.com/1420848000</pre>

<h4>Example Response:</h4>
{
  unix: "1420848000",
  natural: "January 10, 2015"
}

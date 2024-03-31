// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

//request to /api/:date?
app.get('/api/:date?', (req, res) => {
  //get the param
  let data = req.params.date
  if(data === undefined) {
    return res.json({ unix: Date.now(), utc: new Date().toUTCString() })
  }
  // parse the data
  let unixDate = Date.parse(data)
  //if NaN parse to unix int
  if (!unixDate) {
    unixDate = parseInt(data)
  }
  let utcDate = new Date(unixDate)
  // if there is an error in parseInt send invalid
  unixDate ?
    res.send({ unix: unixDate, utc: utcDate.toUTCString() }) :
    res.send({ error: "Invalid Date" })

})



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

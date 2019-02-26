// init project
const express = require('express');
const app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", (req, res) => {
  var ipaddress = req.ip;
  var language = req.acceptsLanguages()[0];
  var software = req.get("User-Agent");
  
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});
 
app.post('/getform', function (req, res) {

});
 
var server = app.listen(8081, '0.0.0.0', function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("web host is: http://%s:%s", host, port)
 
});
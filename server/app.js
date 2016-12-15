var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../'));
app.get('/', function (req, res) {
  res.sendFile('../index.html');
});

app.get('/data', function (req, res) {
	var a = 3;
	for (var i =0; i <1000000000 ; i++) {
		a = 3 + 3;
	}
  res.send(JSON.stringify({
    resource: 30000
  }))
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

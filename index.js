var express = require('express');
var app = express();
var http = require('http');

app.get('/', function (req, res) {
  res.json({
    msg: 'Hello from New Build',
    todo: 'Connecto webhook to circleCi',
    test: 'test1'
  });
});

var httpServer = http.createServer(app);
httpServer.listen(80, function () {
  console.log('Example app listening on port 3000!');
});
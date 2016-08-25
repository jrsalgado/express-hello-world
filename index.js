var express = require('express');
var app = express();
var http = require('http');
var port = 80;
app.get('/', function (req, res) {
  res.json({
    msg: 'Hello from New Build',
    todo: ['Connecto webhook to circleCi','Migrate all'],
    test: 'test'
  });
});

var httpServer = http.createServer(app);
httpServer.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
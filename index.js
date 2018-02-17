var express = require('express');
var app = express();
var http = require('http');
var port = 8080;
var bodyParser = require('body-parser');
var path = require('path');

app.set('views', path.join(__dirname, './web'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './web')));
app.get('/', (req, res) => res.render("index.html"));

app.get('/api', function (req, res) {
  res.json({
    msg: 'Hello from New Build',
    todo: ['Connecto webhook to circleCi','error messaging service','Migrate all'],
    test: 'test'
  });
});

var httpServer = http.createServer(app);
httpServer.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

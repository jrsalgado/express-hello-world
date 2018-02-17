var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');
var validator = require('express-validation');
var joi = require('joi');
var fetch = require('isomorphic-fetch');

const GAPI ={
  "user_url": "https://api.github.com/users/",
}

var port = 8080;

app.use(bodyParser.json())

app.set('views', path.join(__dirname, './web'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, './web')));
app.get('/', (req, res) => res.render("index.html"));

var getuserSchema = {
  params: {
    user: joi.string().required()
  }
}

app.get('/api/user/:user',
  validator(getuserSchema),
  async function (req, res) {

    const user = await fetchPeople(req.params.user);

    res.json({user});
});

var httpServer = http.createServer(app);
httpServer.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

async function fetchPeople(user){
  let response;
  try {
    response= await fetch(`${GAPI.user_url}${user}`);
  } catch (error) {
    console.error(error);
  }
  return await response.json();  
}
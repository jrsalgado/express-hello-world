var request = require('supertest'); 
var app = require('../index.js');

describe('GET /', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
});
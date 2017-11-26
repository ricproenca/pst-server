// app/api/v1/tests/index.test.js
'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../../init/server');

let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
  describe('/GET users', () => {
    it('it should GET all the users', done => {
      chai.request(server).get('/users').end((err, res) => {
        res.should.have.status(200);
        res.text.should.equal('should get users');
        done();
      });
    });
  });
});

after(() => {
  process.exit(0);
});

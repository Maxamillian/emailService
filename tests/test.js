var expect = require('chai').expect;
var stubs = require('./Stubs');

var emailer = require('../emailer/emailer');

describe('Email Service', function() {
  it('should answer GET requests for / with a 200 status code', function() {
    var req = new stubs.request('/', 'GET');
    var res = new stubs.response();

    emailer.requestHandler();

    expect(res._responseCode).to.equal(200);
    expect(res._ended).to.equal(true);
  });
});
var expect = require('chai').expect;

var emailer = require('../controllers/emailer');

describe('Email Service', function() {
  it('should answer GET requests for / with a 200 status code', function() {
    var message = {
      to: 'test@test.com',
      from: 'Test <me@test.com>',
      subject: 'This is a test',
      text: 'Test passed.',
      html: '<strong>Test passed.</strong>',
    };

    emailer.sendEmail(message, function(error, response) {
      expect(response.statusCode.to.equal(202));
    });
  });
});
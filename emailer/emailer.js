var sendGrid = require('./sendGrid');

var requestHandler = function(request, response) {
  var message = {
    to: 'maxamillian_berger@yahoo.com',
    from: 'Max Berger <maxamillianberger@gmail.com>',
    subject: 'Sending email through SendGrid',
    text: 'Great, it worked!',
    html: '<strong>Great, it worked!</strong>',
  };

  sendGrid.sendEmail(message);
};

module.exports.requestHandler = requestHandler;
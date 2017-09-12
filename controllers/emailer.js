var sendGrid = require('./sendGrid');

var sendEmail = function() {
  var message = {
    to: 'maxamillian_berger@yahoo.com',
    from: 'Max Berger <maxamillianberger@gmail.com>',
    subject: 'Sending email through SendGrid',
    text: 'Great, it worked!',
    html: '<strong>Great, it worked!</strong>',
  };

  sendGrid.sendEmail(message, function(wasSuccessful) {
    if (!wasSuccessful) {
      // call secondary email service
    }
  });
};

module.exports.sendEmail = sendEmail;

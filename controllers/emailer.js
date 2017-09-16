var sendGrid = require('./sendGrid');
var ses = require('./amazonSES');

var sendEmail = function() {
  var message = {
    to: 'maxamillianberger@gmail.com',
    from: 'Max Berger <maxamillianberger@gmail.com>',
    subject: 'Sending email through emailService',
    text: 'Great, it worked!'
  };

  sendGrid.sendEmail(message, function(wasSuccessful) {
    if (!wasSuccessful) {
      // call secondary email service
      ses.sendEmail(message, function(error, response) {
        if (error) {
          console.log(error);
        }
      });
    }
  });
};

module.exports.sendEmail = sendEmail;

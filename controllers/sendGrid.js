// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

var sendEmail = function(message, callback) {
  var sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  var msg = message;

  sgMail.send(msg)
    .then(function(response) {
      console.log('success');
      // set to false to test backup service.
      callback(true);
    })
    .catch(function(error) {
      console.error({error});
      callback(false);
    });
};

module.exports.sendEmail = sendEmail;

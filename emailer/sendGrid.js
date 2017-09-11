// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

var sendEmail = function(message) {
  var sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  var msg = message;

  sgMail.send(msg);
};

module.exports.sendEmail = sendEmail;
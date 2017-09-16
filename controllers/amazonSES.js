var sendEmail = function(message, callback) {
  var app = require('../app');
  var aws = require('aws-sdk');

  // Load your AWS credentials and try to instantiate the object.
  // aws.config.loadFromPath(__dirname + '/config.json');
  aws.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  aws.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  aws.config.region = process.env.AWS_REGION;

  // Instantiate SES.
  var ses = new aws.SES();

  // Sending RAW email.
  var ses_mail = `From: ${message.from}\n`;
  ses_mail += `To: ${message.to}\n`;
  ses_mail += `Subject: ${message.subject}\n`;
  ses_mail += `MIME-Version: 1.0\n`;
  ses_mail += `Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n`;
  ses_mail += `--NextPart\n`;
  ses_mail += `Content-Type: text/html; charset=us-ascii\n\n`;
  ses_mail += `${message.text}\n\n`;
  ses_mail += `--NextPart\n`;
  ses_mail += `--NextPart--`;

  var params = {
    RawMessage: { Data: new Buffer(ses_mail) },
    Destinations: [ message.to ],
    Source: message.from
  };

  ses.sendRawEmail(params, function(error, response) {
    if(error) {
      callback(error);
    } else {
      callback(null, response);
    }
  });
};

module.exports.sendEmail = sendEmail;
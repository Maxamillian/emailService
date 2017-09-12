var express = require('express');
var router = express.Router();

var emailer = require('../controllers/emailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  emailer.sendEmail();
  res.render('index', { title: 'Email Service' });
});

module.exports = router;

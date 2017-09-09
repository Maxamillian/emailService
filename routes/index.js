var express = require('express');
var router = express.Router();

var emailer = require('../emailer/emailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Email Service' });
});

module.exports = router;

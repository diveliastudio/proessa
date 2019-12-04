const express = require('express'),
  router = express.Router();

router.get('/', function (req, res) {
  res.render('index')
});

router.get('/services', function (req, res) {
  res.render('services')
});

module.exports = router;
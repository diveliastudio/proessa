const express = require('express'),
  router = express.Router();

router.get('/', function (req, res) {
  res.render('index')
});

router.get('/nosotros', function (req, res) {
  res.render('about')
});

router.get('/contactanos', function (req, res) {
  res.render('contact')
});

router.get('/consultoria', function (req, res) {
  res.render('pricing')
});

router.get('/services', function (req, res) {
  res.render('services')
});

module.exports = router;
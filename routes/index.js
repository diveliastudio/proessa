const express = require('express'),
  router = express.Router(),
  path = require('path');

const base = path.join(__dirname, '/../')

router.get('/', function (req, res) {
  res.render('index')
});

router.use('/mailing', require(base + 'server/mailing'));

router.use('/curso', require(base + 'server/curso'));

router.get('/contactanos', function (req, res) {
  res.render('contact')
});

// router.get('/nosotros', function (req, res) {
//   res.render('about')
// });

// router.get('/consultoria', function (req, res) {
//   res.render('pricing')
// });

// router.get('/services', function (req, res) {
//   res.render('services')
// });

module.exports = router;
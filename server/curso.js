const express = require('express'),
  router = express.Router();

const data = require('./detail.json')

router.get('/', function (req, res) {
  let curso = req.query.slug || 'none',
    details = []

  switch (curso) {
    case '1':
      details = data.one
      break;
    case '2':
      details = data.two
      break;
    default:
      details = []
      break;
  }

  if (details) {
    res.render('course', { details: details })
  } else {
    res.redirect('/')
  }
});

module.exports = router;

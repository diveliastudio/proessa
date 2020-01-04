const express = require('express'),
  router = express.Router();

const data = require('./detail.json')

const slugs = function () {
  let values = []
  for (course in data) {
    values.push({
      slug: data[course].slug,
      object: course
    })
  }

  return values
}

function validSlug(req, res, next) {
  if (!req.query.slug) return res.redirect('/')

  let courses = slugs()

  if (!courses.find(function (elm) { return req.query.slug == elm.slug })) return res.redirect('/')

  return next()
}

router.get('/', validSlug, function (req, res) {
  let curso = req.query.slug,
    details = [],
    courses = slugs()
  
  courses.find(function (elm) {
    if (elm.slug == curso) {
      return details = data[elm.object]
    }
  })

  res.render('course', { details: details });
});

module.exports = router;

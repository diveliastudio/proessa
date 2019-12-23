const express = require('express'),
  router = express.Router(),
  nodemailer = require('nodemailer');

// change this later
// const EMAIL_RECEIVER = 'info@proessaingenieria.com';
const EMAIL_RECEIVER = 'fred.paucarespinoza@gmail.com';
const EMAIL_SENDER = 'proessaingenieria@gmail.com';
// dont change password
// const SENDER_PASS = 'AagviXJ0A9cm';
const SENDER_PASS = '#Proessa';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, //ssl
  auth: {
    user: EMAIL_SENDER,
    pass: SENDER_PASS
  }
});

// ~ middleware to validate req.body

router.post('/', function (req, res) {
  let sub = req.body.origen.toUpperCase()
  var mailOptions = {
    from: EMAIL_SENDER,
    to: EMAIL_RECEIVER,
    subject: `WEB - desde: ${sub}`,
    html:
      '<p>Nombre: ' + req.body.name + '</p>' +
      '<p>Correo: ' + req.body.email + '</p>' +
      '<p>Comentario: ' + req.body.comment + '</p>' +
      '<p>Origen: ' + req.body.origen + '</p>'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('error on mailing ', error)
      return res.json({
        status: 'error',
        msg: 'error'
      })
    } else {
      console.log('email sended ', info.response)
      return res.json({
        status: 'ok',
        msg: info.response
      })
    }
  })
});

module.exports = router;

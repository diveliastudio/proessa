const express = require('express'),
  router = express.Router(),
  nodemailer = require('nodemailer');

// cahnge this later
const EMAIL_RECEIVER = 'web@hadas.pe';
const EMAIL_SENDER = 'info@proessaingenieria.com';
// dont change password
// const SENDER_PASS = 'AagviXJ0A9cm';
const SENDER_PASS = '#Proessa';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, //ssl
  auth: {
    user: EMAIL_SENDER,
    pass: SENDER_PASS
  }
});

router.post('/', function (req, res) {
  console.log('llegaste al mailing')
  // if (!req.body.mail) return res.redirect('/');
  var mailOptions = {
    from: EMAIL_SENDER,
    to: EMAIL_RECEIVER,
    subject: 'CONSULTA WEB',
    html:
      '<p>Nombre: ' +
      req.body.name +
      '</p>' +
      '<p>Correo: ' +
      req.body.email +
      '</p>' +
      '<p>Comentario: ' +
      req.body.comment +
      '</p>'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('error on mailing ', error)
      res.json({
        status: 'error',
        msg: 'error'
      })
    } else {
      console.log('email sended ', info.response)
      res.json({
        status: 'ok',
        msg: info.response
      })
    }
  })
});

module.exports = router;


const express = require('express'),
  helmet = require('helmet'),
  path = require('path'),
  routes = require('../routes'),
  bodyParser = require('body-parser');
const host = process.env.HOST || '206.189.212.127',
  port = process.env.PORT || 3000;

const app = express();

const generalPath = path.join(__dirname, '../')

app.set('port', port);
;
function start() {
  // hide headers
  app.use(helmet())

  // static setup
  app.use(express.static(path.join(generalPath, 'public')));

  // view engine setup
  app.set('views', path.join(generalPath, 'views'));
  app.set('view engine', 'ejs');

  // body parser
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // routes
  app.use(routes)

  // server
  app.listen(port, host)
  console.log(`Server listening on http://${host}:${port}`)
}

start();
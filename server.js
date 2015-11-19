//required packages
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');
var path = require('path');
var compression = require('compression');

var urlController = require('./controllers/url');

//mongodb service
//mongoose.connect('mongodb://localhost:27017/shortener');
mongoose.connect('mongodb://' + process.env.DBUSER + ':'+ process.env.DBPASS + '@ds047524.mongolab.com:47524/shortener_app');
//express application
var app = express();
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'/public')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(compression());
//app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

//express router for handling routes.
var router = express.Router();

router.route('/')
  .get(urlController.Main);

router.route('/add')
  .get(urlController.AddUrl);

router.route('/r/:path')
  .get(urlController.Redirect);

router.route('*')
  .get(urlController.Error);

app.use('/', router);

// Start the server
var port = process.env.PORT || 8080;
app.listen(port);

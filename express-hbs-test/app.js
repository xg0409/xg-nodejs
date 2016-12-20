var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var exphbs = require('express-handlebars');
var app = express();


//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var handlebars = exphbs.create({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: 'views/layout/',
  partialsDir: 'views/partials/',
  // helpers: helpers
});

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));



app.use('/api', require('./routes/api'));
app.use('/', require('./routes/pages'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    error: err
  });
});

app.listen(3000, function() {
  console.log('To start the 3000 service')
})


module.exports = app;

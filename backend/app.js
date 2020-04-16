var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloWorldAPIRouter = require("./routes/helloWorldAPI");
var homeRouter = require("./routes/home");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/helloWorldAPI",helloWorldAPIRouter);
app.use("/home",homeRouter);

var api = require('./loginpage');
const jwt = require('jsonwebtoken');
const secret = 'secret';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const withAuth = require('./middleware');


app.post('/authenticate', function(req, res) {
  const email = req.body.e;
  const password = req.body.p;
  var loginSuccess = api.checkLogin(email,password);
  console.log(loginSuccess);
  if ( loginSuccess == true ) {
      const payload = { email };
      const token = jwt.sign(payload, secret, {
          expiresIn: '1h'
      });
      res.cookie('token', token, { httpOnly: true }).sendStatus(200);
  } else {
      res.sendStatus(410);
  }
});

app.get('/token', withAuth, function(req, res) {
  res.sendStatus(200);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

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

options = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(options));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/helloWorldAPI",helloWorldAPIRouter);
app.use("/home",homeRouter);

var dbapi = require('./loginpage');
var reqapi = require('./itemsRequest');
var donapi = require('./itemsDonate');
const jwt = require('jsonwebtoken');
const secret = 'secret';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const withAuth = require('./middleware');


const getEmail = function(req) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.token;
  email = '';
  jwt.verify(token, secret, function(err,decoded) {
      if(err) {
          throw error;
      } else {
          console.log(decoded.email);
          email = decoded.email;
      }
  });
  return email;
}

app.post('/authenticate', function(req, res) {
  const email = req.body.e;
  const password = req.body.p;

  const payload = { email };
  const token = jwt.sign(payload, secret, {
      expiresIn: '1h'
  });
  dbapi.checkLogin(email,password,res,token);
});

app.post('/register', function(req,res) {
  const email = req.body.e;
  const password = req.body.p;
  const payload = { email };
  const token = jwt.sign(payload, secret, {
      expiresIn: '1h'
  });
  dbapi.registerUser(email,password,res,token);
});

app.get('/token', withAuth, function(req, res) {
  res.sendStatus(200);
});

app.post('/newrequest', function(req,res) {
  const location = req.body.location;
  const item = req.body.item;
  const amount = req.body.amount;
  const email = getEmail(req);
  var success = reqapi.addRequest(item,location,amount,email);
  if(success === true) {
    res.sendStatus(200);
  } else {
    res.sendStatus(411);
  }
});

app.post('/newdonation', function(req,res) {
  const location = req.body.location;
  const item = req.body.item;
  const amount = req.body.amount;
  const email = getEmail(req);
  var success = donapi.addDonation(item,location,amount,email);
  if(success === true) {
    res.sendStatus(200);
  } else {
    res.sendStatus(411);
  }
});

app.post('/makematch', function(req,res) {
  const id1 = req.body.id1;
  const type1 = req.body.type1;
  const id2 = req.body.id2;
  const type2 = req.body.type2;
  dbapi.makeMatch(id1,type1,id2,type2);
  res.sendStatus(200);
});

app.get('/getItems', function(req,res) {
  var obj1 = {
    name: "hi",
    item: 5
  }
  var obj2 = {
    name: "hi",
    item: 5
  }
  res.json({
    requests: [
      obj1, obj2
    ],
    donations: [
      obj1, obj2
    ]
  });
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

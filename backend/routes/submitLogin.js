// const api = require('../loginpage');
// var express = require("express");
// var router = express.Router();
// const fs = require('fs');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// const withAuth = require('../middleware');
// const bodyParser = require("body-parser");

// router.use(cookieParser());
// router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json());

// router.get('/', function(req,res) {
//     res.send("Welcome Tester!");
// });

// router.post('/register', function(req, res) {
//     const { email, password } = req.body;
//     api.registerUser(email,password);
//     res.status(200).send("Welcome!");
// });

// router.post('/authenticate', function(req, res) {
//     console.log("test111");
//     alert("test222");
//     // const { email, password } = req.body;
//     // var loginSuccess = api.checkLogin(req.body.email,req.body.password);
//     // console.log(loginSuccess);
//     // console.log("test");
//     // loginSuccess = true;
//     // var temp = 1;
//     // if ( temp == 1 ) {
//     //     res.send("in temp");
//     //     const payload = { email };
//     //     const token = jwt.sign(payload, secret, {
//     //         expiresIn: '1h'
//     //     });
//     //     res.cookie('token', token, { httpOnly: true }).sendStatus(200);
//     // } else {
//     //     res.send("login failed");
//     // }
// });

// router.get('/checkToken', withAuth, function(req, res) {
//     res.sendStatus(200);
// });

// module.exports = router;






//const api = require('../loginpage');
var express = require("express");
var router = express.Router();
//const fs = require('fs');
//const jwt = require('jsonwebtoken');
//const cookieParser = require('cookie-parser');
const withAuth = require('../middleware');
//const bodyParser = require("body-parser");

//router.use(cookieParser());
//router.use(bodyParser.urlencoded({ extended: false }));
//router.use(bodyParser.json());

router.get('/', function(req,res) {
    res.send("Welcome Tester!");
});

// router.post('/register', function(req, res) {
//     const { email, password } = req.body;
//     api.registerUser(email,password);
//     res.status(200).send("Welcome!");
// });

router.get('/checkToken', withAuth, function(req, res) {
    res.sendStatus(200);
});

module.exports = router;
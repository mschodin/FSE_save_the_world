//import registerUser from '../loginpage';
//import checkLogin from '../loginpage';
const tst = require('../loginpage');
var express = require("express");
var router = express.Router();
const fs = require('fs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const withAuth = require('../middleware');

router.use(cookieParser());

router.get('/', function(req,res) {
    res.send("Welcome Tester!");
});

router.post('/register', function(req, res) {
    const { email, password } = req.body;
    tst.registerUser(email,password);
    res.send("Welcome!");
});

router.post('/authenticate', function(req, res) {
    const { email, password } = req.body;
    var loginSuccess = tst.checkLogin(email,password);
    if ( loginSuccess ) {
        const payload = { email };
        const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
        });
        res.cookie('token', token, { httpOnly: true }).sendStatus(200);
    } else {
        res.send("login failed");
    }
});

module.exports = router;
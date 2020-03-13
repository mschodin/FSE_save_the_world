//import registerUser from '../loginpage';
//import checkLogin from '../loginpage';
const api = require('../loginpage');
var express = require("express");
var router = express.Router();
const fs = require('fs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

router.use(cookieParser());

router.get('/', function(req,res) {
    res.send("Welcome Tester!");
});

router.post('/register', function(req, res) {
    const { email, password } = req.body;
    api.registerUser(email,password);
    res.status(200).send("Welcome!");
});

router.post('/authenticate', function(req, res) {
    const { email, password } = req.body;
    var loginSuccess = api.checkLogin(email,password);
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
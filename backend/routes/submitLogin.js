var express = require("express");
var router = express.Router();
const fs = require('fs');
const jwt = require('jsonwebtoken');

router.get('/', function(req,res) {
    res.send("Welcome Tester!");
});

router.post('/exp', function(req, res) {
    const { email, password } = req.body;
})

module.exports = router;
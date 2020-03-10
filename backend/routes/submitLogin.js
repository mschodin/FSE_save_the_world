var express = require("express");
var router = express.Router();
const fs = require('fs');

router.get('/', function(req,res) {
    res.send("Welcome Tester!");
});


module.exports = router;
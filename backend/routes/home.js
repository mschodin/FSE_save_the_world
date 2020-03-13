var express = require("express");
var router = express.Router();
const fs = require('fs');
const cookieParser = require('cookie-parser');
const withAuth = require('../middleware');

router.use(cookieParser());

router.get('/', withAuth, function(req,res) {
    res.send("YOUAREHOME");
});


module.exports = router;
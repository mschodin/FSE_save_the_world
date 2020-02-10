var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
    res.send("Hello World! The number you are looking for is: 987987123123");
});

module.exports = router;
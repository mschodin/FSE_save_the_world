var express = require("express");
var router = express.Router();
const fs = require('fs');

router.get('/list-certs', function (req, res) {
    fs.readFile("certs.json", 'utf8', function(err,data){
        console.log(data);
        res.send(data);
    })
})

module.exports = router;
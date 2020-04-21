const CryptoJS = require("crypto-js");

var express = require("express");
var router = express.Router();
const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    port: '3308',
    user: 'root',
    password: '',
    database: 'savetheworld'
});

let sql = `SELECT * FROM savetheworld.itemrequests`;
con.query(sql, (error, results, fields) => {
    if (error) {
        return console.error(error.message);
    }
})

function viewRequests(res){
    let sql = 'SELECT * FROM savetheworld.itemrequests';
    con.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error.message);
        } else {
            var requestArr = [];
            for(var i = 0; i < results.length; i++){
                var obj = {
                    id: results[i].iditemRequest,
                    item: results[i].itemName,
                    amount: results[i].amount,
                    location: results[i].location
                }

                requestArr[i] = obj;

                console.log(requestArr);
            }
            res.status(200).json({
                requests: requestArr
            });
        }
    });
}

function addRequest(itemName, location, amount, email){
    let sql ='INSERT INTO savetheworld.itemrequests(itemName,location,amount,email) VALUES('+
            mysql.escape(itemName)+','+mysql.escape(location)+','+mysql.escape(amount)+','+mysql.escape(email)+')';

    con.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error.message);
            return false;
        }
    })
    console.log("Request Registered");
    return true;
}

function removeRequest(iditemRequest){
    let sql = 'DELETE FROM savetheworld.itemrequests WHERE iditemRequest =' + mysql.escape(iditemRequest);
    con.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error.message);
            return false;
        }
    })
    console.log("Request Removed");
    return true;
}

function subtractRequest(iditemRequest, subtract){
    let sql = 'UPDATE savetheworld.itemrequests SET amount = amount - ' + mysql.escape(subtract) + 'WHERE iditemRequest = ' + mysql.escape(iditemRequest);
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
    })
    console.log("Request subtracted");
}
module.exports = {addRequest, removeRequest, viewRequests, subtractRequest}


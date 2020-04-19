const CryptoJS = require("crypto-js");

var express = require("express");
var router = express.Router();
const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    port: '3308',
    user: 'root',
    password: 'password',
    database: 'savetheworld'
});

let sql = `SELECT * FROM savetheworld.itemdonations`;
con.query(sql, (error, results, fields) => {
    if (error) {
        return console.error(error.message);
    }
})

function viewRequests(itemName='*', location='*', amount='*', email='*'){
    let sql = 'SELECT * FROM itemdonations WHERE itemName =' + mysql.escape(itemName) + "AND location =" + mysql.escape(location) +
                "AND amount = " + mysql.escape(amount) + "AND email = " + mysql.escape(email);

    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
    })
}

function addRequest(itemName, location, amount, email){
    let sql ='INSERT INTO savetheworld.itemdonations(itemName,location,amount,email) VALUES('+
            mysql.escape(itemName)+','+mysql.escape(location)+','+mysql.escape(amount)+','+mysql.escape(email)+')';

    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
    })
    console.log("Donation Registered");
}

function removeRequest(iditemRequest){
    let sql = 'DELETE FROM savetheworld.itemdonations WHERE iditemDonate =' + mysql.escape(iditemRequest);
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
    })
    console.log("Donation Removed");
}

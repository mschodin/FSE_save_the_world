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

let sql = `SELECT * FROM savetheworld.itemrequests`;
con.query(sql, (error, results, fields) => {
    if (error) {
        return console.error(error.message);
    }
})

function viewRequests(itemName='*', location='*', amount='*', email='*'){
    let sql = 'SELECT * FROM itemrequests WHERE itemName =' + mysql.escape(itemName) + "AND location =" + mysql.escape(location) +
                "AND amount = " + mysql.escape(amount) + "AND email = " + mysql.escape(email);

    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
    })
}

function addRequest(itemName, location, amount, email){
    let sql ='INSERT INTO savetheworld.itemrequests(itemName,location,amount,email) VALUES('+
            mysql.escape(itemName)+','+mysql.escape(location)+','+mysql.escape(amount)+','+mysql.escape(email)+')';

    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
    })
    console.log("Request Registered");
}

function removeRequest(iditemRequest){
    let sql = 'DELETE FROM savetheworld.itemrequests WHERE iditemRequest =' + mysql.escape(iditemRequest);
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
    })
    console.log("Request Removed");
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
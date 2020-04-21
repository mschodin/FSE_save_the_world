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

let sql = `SELECT * FROM savetheworld.itemdonations`;
con.query(sql, (error, results, fields) => {
    if (error) {
        return console.error(error.message);
    }
})

function viewDonations(itemName='*', location='*', amount='*', email='*'){
    let sql = 'SELECT * FROM itemdonations WHERE itemName =' + mysql.escape(itemName) + "AND location =" + mysql.escape(location) +
                "AND amount = " + mysql.escape(amount) + "AND email = " + mysql.escape(email);

    con.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error.message);
            return false;
        }
        return results;
    })
}

function addDonations(itemName, location, amount, email){
    let sql ='INSERT INTO savetheworld.itemdonations(itemName,location,amount,email) VALUES('+
            mysql.escape(itemName)+','+mysql.escape(location)+','+mysql.escape(amount)+','+mysql.escape(email)+')';

    con.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error.message);
            return false;
        }
    })
    console.log("Donation Registered");
    return true;
}

function removeDonations(iditemDonate){
    let sql = 'DELETE FROM savetheworld.itemdonations WHERE iditemDonate =' + mysql.escape(iditemDonate);
    con.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error.message);
            return false;
        }
    })
    console.log("Donation Removed");
    return true;
}

function subtractDonations(iditemDonate, subtract){
    let sql = 'UPDATE savetheworld.itemdonations SET amount = amount - ' + mysql.escape(subtract) + 'WHERE iditemDonate = ' + mysql.escape(iditemDonate);
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
    })
    console.log("Donation subtracted");
}

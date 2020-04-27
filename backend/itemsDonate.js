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

function populateDonations(){
    addDonations("blankets", "Brazil", 60, "wecanhelp@gmail.com");
    addDonations("sunscreen", "Florida", 80, "springbreakcancelled@gmail.com");
    addDonations("hawkeye gear", "Iowa City", 900000, "bestcollege@aol.com");
    addDonations("vaccine", "CDC", 1, "wedidit@yahoo.com");
}

function viewDonations(res){
    let sql = 'SELECT * FROM savetheworld.itemdonations';
    con.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error.message);
        } else {
            var donationArr = [];
            for(var i = 0; i < results.length; i++){
                var obj = {
                    id: results[i].iditemDonate,
                    item: results[i].itemName,
                    amount: results[i].amount,
                    location: results[i].location
                }
                donationArr[i] = obj;
            }
            res.status(200).json({
                donations: donationArr
            });
        }
    });
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
    let sql = 'UPDATE savetheworld.itemdonations SET amount = amount - ' + mysql.escape(subtract) + ' WHERE iditemDonate = ' + mysql.escape(iditemDonate);
    con.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
    })
    console.log("Donation subtracted");
}

function checkDonations(){
    console.log("Checking donations");

    let sql = 'SELECT * FROM savetheworld.itemdonations';
    con.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error.message);
        } else {
            if(results.length === 0){
                console.log("Donations are empty, populating");
                populateDonations();
            }
        }
    });
}

module.exports = {addDonations, removeDonations, viewDonations, subtractDonations, checkDonations}
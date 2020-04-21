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

let sql = `SELECT * FROM savetheworld.matches`;
con.query(sql, (error, results, fields) => {
    if (error) {
        return console.error(error.message);
    }
})

function viewMatches(res){
    let sql = 'SELECT * FROM savetheworld.matches';

    con.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error.message);
        } else {
            var matchesArr = [];
            for(var i = 0; i < results.length; i++){
                var obj = {
                    id: results[i].iditemDonate,
                    item: results[i].itemName,
                    amount: results[i].amount,
                    location: results[i].location
                }
                matchesArr[i] = obj;
            }
            res.status(200).json({
                matches: matchesArr
            });
        }
    })
}

function addMatch(matchID, requestID, donationID, requestAmount, donationAmount, Type){
    let sql ='INSERT INTO savetheworld.matches(matchID,requestID,donationID,requestAmount,donationAmount,Type) VALUES('+
            mysql.escape(matchID)+','+mysql.escape(requestID)+','+mysql.escape(donationID)+','+mysql.escape(requestAmount)+','+
            mysql.escape(donationAmount)+','+mysql.escape(Type)+')';

    con.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error.message);
            return false;
        }
    })
    console.log("Match Registered");
    return true;
}

function removeMatch(matchID){
    let sql = 'DELETE FROM savetheworld.matches WHERE matchID =' + mysql.escape(matchID);
    con.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error.message);
            return false;
        }
    })
    console.log("Match Removed");
    return true;
}

function checkMatches(){
    console.log("Checking Matches");

    let sql = 'SELECT * FROM savetheworld.matches';
    con.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error.message);
        } else {
            if(results.length === 0){
                // RESULTS ARE EMPTY
            }
        }
    });
}

module.exports = {removeMatch, addMatch, viewMatches, checkMatches}
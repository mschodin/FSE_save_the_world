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

function viewMatches(matchID='*', requestID='*', donationID='*', Type='*'){
    let sql = 'SELECT * FROM matches WHERE matchID =' + mysql.escape(matchID) + "AND requestID =" + mysql.escape(requestID) +
                "AND donationID = " + mysql.escape(donationID) + "AND Type = " + mysql.escape(Type);

    con.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error.message);
            return false;
        }
        return results;
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
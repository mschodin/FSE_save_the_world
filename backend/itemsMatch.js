const CryptoJS = require("crypto-js");

var express = require("express");
var router = express.Router();
const mysql = require('mysql');
var donapi = require('./itemsDonate');
var reqapi = require('./itemsRequest');
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

function addMatch(donationID, requestID){

    var to = '';
    var from = '';
    var item = '';
    var donamount = 0;
    var reqamount = 0;
    var amount = 0;

    let donsql = "SELECT * FROM savetheworld.itemdonations WHERE iditemDonate=" + donationID;
    let reqsql = "SELECT * FROM savetheworld.itemrequest WHERE iditemRequest=" + requestID;

    con.query(donsql, (error, results, fields) => {
        if(error){
            console.error(error.message);
        } else {
            from = results[0].location;
            item = results[0].itemName;
            donamount = results[0].amount;

            con.query(reqsql, (er, res, fie) => {
                if(er){
                    console.error(er.message);
                } else {
                    to = res[0].location;
                    reqamount = res[0].amount;
    
                    if (donamount > reqamount) {
                        amount = reqamount;
                    }
                    else {
                        amount = donamount;
                    }
        
                    let matchsql ='INSERT INTO savetheworld.matches(donationLocation,requestLocation,Amount,Item) VALUES('+
                        mysql.escape(from)+','+mysql.escape(to)+','+mysql.escape(amount)+','+
                        mysql.escape(item)+')';
        
                    con.query(matchsql, (e, r, f) => {
                        if(e) {
                            console.log("WE GOT HERE");
                            console.error(e.message);
                        } else {
                            console.log("IT WORKED!!!!");
                            if (donamount === reqamount){
                                donapi.removeDonations(donationID);
                                reqapi.removeRequest(requestID);
                            }
                            else if (donamount > reqamount){
                                reqapi.removeRequest(requestID);
                                donapi.subtractDonations(donationID, reqamount);
                            }
                            else {
                                donapi.removeDonations(donationID);
                                reqapi.subtractRequest(requestID, donamount);
                            }
                        }
                    });
                }
            });
        }
    });
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
// LOAD ENCRYPT LIBRARY
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

let sql = `SELECT username FROM users`;
con.query(sql, (error, results, fields) => {
    if (error) {
        return console.error(error.message);
    }
})

function createObject(loc, itm, amt, i){
    var obj = {
        location: loc,
        item: itm,
        amount: amt,
        id: i
    };
    return obj;
}

let newUser  = "xxxxxxx";
let newPass = "xxxxxxxx";
let tempID = 50;

module.exports = {
    checkLoginTest: function(username, password) {
        if (username == "tester" && password == "password" || username == newUser && password == newPass){
            return true;
        } else {
            return false;
        }
    },

    registerUserTest: function(username,password){
        newUser = username;
        newPass = password;
        return true;
    },

    decrypt: function(key) {
        // DECRYPT
        var decipher = CryptoJS.AES.decrypt(cipher, key);
        decipher = decipher.toString(CryptoJS.enc.Utf8);
        return decipher;
    },

    encrypt: function(key) {
        // ENCRYPT
        var cipher = CryptoJS.AES.encrypt("PASSWORD", key);
        cipher = cipher.toString();
        return cipher
    },

    registerUser: function(username, password){
        let sql ='INSERT INTO savetheworld.users(Username,Password) VALUES('+username+','+password+')';
        con.query(sql, (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
        })
        console.log("Account Registered");
        return true;
    },

    checkLogin: function(username, password){
        var userFound = false;
        let sql = 'SELECT * FROM users WHERE username =' + username;
        con.query(sql, (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
        })
        let dbPassword = results[0][1].users;
        if(dbPassword == encrypt(password)){
            console.log("Login Successful");
            userFound = true;
        }
        else{
            console.log("Login Failed");
        }
        return userFound;
    },

    getNextID: function(){
        // TODO: FUNCTION TO GET NEXT ID FROM DATABASE, RETURN IT, AND INCREMENT IT BY 1 AND STORE BACK IN THE DATABASE
        var nextID = tempID;
        tempID = tempID + 1;
        return nextID;
    },

    storeNewRequest: function(location, item, amount, id) {
        // TODO: Store in the requests table
    },

    storeNewDonation: function(location, item, amount, id) {
        // TODO: Store in the donations table
    },

    removeRequest: function(id){
        // TODO: Remove request with id from the requests table
    },

    removeDonation: function(id){
        // TODO: Remove donation with id from the donation table
    },

    makeMatch: function(id1, type1, id2, type2){
        // create new match in the matches table with the request and donation given
    },
};

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

let newUser  = "xxxxxxx";
let newPass = "xxxxxxxx";

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
    }
};
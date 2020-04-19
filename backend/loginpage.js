// LOAD ENCRYPT LIBRARY
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

    registerUser: function(username, password, res, token){
        let sql ="INSERT INTO savetheworld.users(Username,Password) VALUES('"+username+"','"+password+"')";
        con.query(sql, (error, results, fields) => {
            if (error) {
                console.error(error.message);
                res.sendStatus(421);
            } else {
                res.cookie('token', token, { httpOnly: true }).sendStatus(200);
            }
        })
        console.log("Account Registered");
        return true;
    },

    checkLogin: function(username, password, res, token){
        let sql = "SELECT * FROM savetheworld.users WHERE Username='" + username + "'";
        let dbPassword = '';

        con.query(sql, (error, results, fields) => {
            if (error) {
                console.error(error.message);
            }
            try{
                dbPassword = results[0].Password;
                if(dbPassword == password){
                    res.cookie('token', token, { httpOnly: true }).sendStatus(200);
                } else {
                    console.log("Incorrect password");
                    res.sendStatus(415);
                }
            } catch {
                console.log("No user found");
                res.sendStatus(414);
            }
        });
    }
};



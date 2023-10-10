const mysql = require('mysql2');
const db = require('../config/db.js');

module.exports.signup = (req, res) => {
    const { name, email, password } = req.body;
    db.query('SELECT EMAIL FROM USERS WHERE EMAIL = ?', [email], (err, results) => {
        if (err) {
            console.log(err);
        }
        if (results.length > 0) {
            return res.json({
                message: 'That email is already in use'
            })
        } else if (password !== password) {
            return res.render({
                message: 'Password do not match'
            })
        }

        db.query('INSERT INTO USERS SET ?', { name: name, email: email, password: password }, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
                return res.json({
                    message: 'User registered'
                })
            }
        })
    });
}
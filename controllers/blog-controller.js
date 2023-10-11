const mongoose = require('mongoose');
const db = require('../config/db.js');

module.exports.getAllBlogs = async (req, res, next) => {
    db.query('SELECT * FROM BLOGS', (err, results) => {
        if (err) {
            console.log(err);
        } else {
            return res.send(results);
        }
    })
};

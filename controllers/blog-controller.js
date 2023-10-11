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

module.exports.addBlog = async (req, res, next) => {
    const { title, description, image, id } = req.body;
    db.query('SELECT * FROM USERS WHERE ID = ?', [id], (err, results) => {
        if (err) {
            console.log(err);
        }
        if (results.length === 0) {
            return res.json({
                message: 'Unable to find the user'
            })
        }
        db.query('INSERT INTO BLOGS SET ?', { title: title, description: description, image: image, id: id }, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
                return res.json({
                    message: 'Blog added'
                })
            }
        })
    })
};

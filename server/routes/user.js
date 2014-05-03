var db = require('../models'),
    nodemailer = require('nodemailer'),
    http = require('http'),
    request = require('request'),
    security = require('./security'),
    crypto = require('crypto'),
    fs = require('fs');

exports.register = function (req, res, next) {
	db.User.create({
		username: req.body.username,
	})
	.error(function (err) {
		res.send(500, {error: 'error creating the user'});
	})
	.success(function (user) {
		res.send(200)
	});
};
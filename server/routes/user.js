var db = require('../models'),
    nodemailer = require('nodemailer'),
    http = require('http'),
    request = require('request'),
    security = require('./security'),
    crypto = require('crypto'),
    fs = require('fs');

exports.register = function (req, res, next) {
	db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: security.hashPassword(req.body.password)
	})
	.success(function (user) {
		res.send(200);
	})
	.error(function (err) {
		res.send(500, {error: 'error creating the user'});
	});
};
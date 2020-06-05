const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');


const fitUser = require('./../models/fitUser');



router.get('/', function(req, res) {
    res.render('homepage', {
        title: "homepage",
        style: "./../files/homepage.css",
        script: "./../files/homepage.js"
    });
});




router.get('/login', function(req, res) {
					res.render('login', {
						title: "login",
						style: "./../files/loginStyle.css"
					});
				});
				
router.get('/signup', function(req, res) {
					res.render('signup', {
						title: "signup",
						style: "./../files/signupStyle.css",
						script: "./../files/api.js"
					});
				});


router.get('/dashboard', function(req, res) {
					res.render('dashboard', {
						title: "dashboard",
						style: "./../files/dashboardStyle.css",
						script: "./../files/activity.js",
						layout: 'other'
					});
				});


router.get('/aboutus', function(req, res) {
						res.render('aboutus', {
							title: "aboutus",
							style: "./../files/aboutus.css",
						});
					});
					
router.get('/tutorial', function(req, res) {
						res.render('tutorial', {
							title: "tutorial",
							style: "./../files/tutorial.css",
						});
					});


router.get('/contactus', function(req, res) {
						res.render('contactus', {
							title: "contactus",
							style: "./../files/contactus.css",
							script: "./../files/contactus.js"
						});
					});
					
					
router.get('/tips', function(req, res) {
						res.render('tips', {
							title: "tips",
							style: "./../files/tips.css",
						});
					});
					
router.get('/terms', function(req, res) {
						res.render('terms', {
							title: "terms",
							style: "./../files/terms.css",
						});
					});
					

module.exports = router;
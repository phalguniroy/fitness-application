const express = require('express');
const router = express.Router();
var passport = require("passport");
var flash = require('connect-flash');



const bodyParser = require('body-parser');


const User = require('./../models/fitUser');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);





router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/signup', function(req, res) {
    res.render('signup', {
        title: "signup",
        style: "./../files/signupStyle.css",
        script: "./../files/api.js"
    });
});

router.post("/signup",(req,res) => {
   
    var newUser = new User({
                            
                            username:    req.body.username,
                            email:       req.body.email,
                            firstName:   req.body.firstName,
                            lastName:    req.body.lastName       
                                        })
                                        console.log(newUser)
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err.message);
            return res.render("signup",{
                title: "signup",
                 style: "./../files/signupStyle.css",
                 script: "./../files/api.js",
                message: err.message
            })
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/dashboard")
        })
    })

    
    
}); 


            



router.get('/login', function(req, res) {
    
    res.render('login', {
        title: "login",
        style: "./../files/loginStyle.css"
        
    });
});










router.post("/login",passport.authenticate("local",{
    successRedirect: "/dashboard",
    failureRedirect:"/login",
    }),(req,res) => {
        
   
});

router.get('/logout', function(req, res){
   
    req.logout();
    res.redirect("/");
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


module.exports = router;
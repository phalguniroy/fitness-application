const express = require('express');
const router = express.Router();
var flash = require('connect-flash');



const bodyParser = require('body-parser');


const User = require('./../models/fitUser');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);





router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));



router.post("/signup",(req,res) => {

    let user = new User(req.body);

    user.save((err)=>{
        if(err){
            let error = "something bad happen, try with right info";
            console.log(err)
            if(err.code === 11000){
                error = "the email isalready taken, try with new email";
            }
           
            return res.render("signup",{ 
                error: error,
                title: "signup",
				style: "./../files/signupStyle.css",
				script: "./../files/api.js"
            });
            
        }
        res.redirect("/login");
    });
    
});


            


router.post("/login",(req,res) => {
    console.log(req.body.email)
    User.findOne({email: req.body.email},(err,user) => {
        if(err || !user || req.body.password !== user.password){
            return res.render("login",{
                error: "incorrect email/ psd",
                title: "login",
				style: "./../files/loginStyle.css"
            });
        }
        console.log(User.findOne({email: req.body.email}))
        res.redirect("/dashboard");
    });
});



router.post('/logout', function(req, res){
   
    res.redirect('/');
    var session = req.session;
    session.destroy(); 
});


module.exports = router;
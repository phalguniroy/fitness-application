const express = require('express');
const router = express.Router();
var flash = require('connect-flash');



const bodyParser = require('body-parser');


const User = require('./../models/fitData');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);





router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));



router.post("/dashboard",(req,res) => {

    let user = new User(req.body);

    user.save((err)=>{
        if(err){
            let error = "something bad happen, try with right info";
            console.log(err)
            if(err.code === 11000){
                error = "the email isalready taken, try with new email";
            }
           
            return res.render('dashboard', {
                error: error,
                title: "dashboard",
                style: "./../files/dashboardStyle.css",
                script: "./../files/activity.js",
                layout: 'other'
            });
        
            
        }
        res.redirect("/dashboard");
    });
    
});


            



module.exports = router;
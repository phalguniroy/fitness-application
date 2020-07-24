const express = require('express');
const router = express.Router();
var flash = require('connect-flash');

/////////////////////date
var d = new Date();
var currentDate = d.getDate()+"-"+(d.getMonth() + 1)+ "-"+d.getFullYear();
/////////////



const bodyParser = require('body-parser');


const userData = require('../models/fitData');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);





router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));





router.get('/dashboard',isLoggedIn, function(req, res) {
    // console.log("->"+req.user+"<-")
    userData.find({ email:req.user.email  }, (err, mail) => {
      //console.log(persona);
      if (err) throw err;
    res.render('dashboard', {
        title: "dashboard",
        style: "./../files/dashboardStyle.css",
        script: "./../files/activity.js",
        layout: 'other',
        currentUser: req.user.username,
        currentEmail: req.user.email,
        mail: mail
    });
  })
});


////////////////////////////////////


router.post("/dashboard",isLoggedIn,(req,res) => {

    var Data = new userData(req.body);
    // console.log(Data)
    
    userData.findOne({ 'email': req.body.email }, function (err, userdata) {
        
        if (err) {
           
            return handleError(err);
        }
        
        if(!userdata){

           

                Data.save((err)=>{
        if(err){
            let error = "something bad happen, try with right info";
            console.log(err)
            
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

                    }
       

                
        else{

          if(userdata.date==currentDate){

            
            var idupdate = userdata._id

                var id = idupdate;
                var data = req.body;
                userData.findByIdAndUpdate(
                  id,
                  {
                    $set: data
                  },
                  { multi: true, new: true },
                  function(error, product) {
                    if (error) {
                      return res.send({
                        status: false,
                        message: "failed to update",
                        error: error
                      });
                    }
                    return res.status(200).redirect("/dashboard");
                  }
                );
              


            console.log("already available")



          }

          else{

            Data.save((err)=>{
              if(err){
                  let error = "something bad happen, try with right info";
                  console.log(err)
                  
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

          }
                   


                    
           

        }

      })


});
///////////////////////////////////////////////////



//////////////////////////////////////////////////////

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}
        



module.exports = router;
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










            



router.get('/setting',isLoggedIn, function(req, res) {

  console.log("-setting->"+req.user+"<-")

    res.render('usersetting', {
        title: "setting",
        style: "./../files/usersetting.css",
        script: "./../files/usersetting.js",
        username: req.user.username,
        email: req.user.email
    });
});










router.post('/setting',isLoggedIn, function(req, res) {

    
    var settingData = new User(req.body);
    console.log("sett pg data"+settingData)
    
    User.findOne({ 'email': req.user.email }, function (err, userdata) {
        console.log("query data-"+userdata)
        
        if (err) {
           
            return handleError(err);
        }
        
        
        var idupdate = userdata._id

        var id = idupdate;
        var data = req.body;
        User.findByIdAndUpdate(
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
            return res.status(200).redirect("/setting");
          }
        );
      
                    

                    

})
})








function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


module.exports = router;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserData = new Schema({
   
   
    email : {
        type : String,
        required : true
    },
    date : {
        type : String
    },
    finalActivityList : { 
        type : Array , "default" : [] 
    },
    finalCalorieList : { 
        type : Array , "default" : [] 
    },
    totalCalorie : {
        type : Number
    },
    height : {
        type : Number
    },
    weight : {
        type : Number
    },
    bmi : {
        type : Number
    },
    bmr : {
        type : Number
    },
    gender : {
        type : String
    }

  
    
});

module.exports = mongoose.model('fitData', UserData);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserData = new Schema({
   
   
    email : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    finalActivityList : { 
        type : Array , "default" : [] 
    },
    finalCalorieList : { 
        type : Array , "default" : [] 
    },
    totalCalorie : {
        type : Number,
        required : true
    },
    height : {
        type : Number,
        required : true
    },
    weight : {
        type : Number,
        required : true
    },
    bmi : {
        type : Number,
        required : true
    },
    bmr : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true
    }

  
    
});

module.exports = mongoose.model('fitData', UserData);

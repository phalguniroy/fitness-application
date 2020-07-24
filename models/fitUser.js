const mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

var User = new Schema({
   
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
  
  
    password : {
        type : String
    },
    weight: {
        type: Number,
        required: false,

    },
    height: {
        type: Number,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    sleepingHour: {
        type: Number,
        required: false,
    },
    waterIntake: {
        type: Number,
        required: false,
    },
    walkingDistance: {
        type: Number,
        required: false,
    },
    workoutTime: {
        type: Number,
        required: false,
    },
    calorieIntake: {
        type: Number,
        required: false,
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);

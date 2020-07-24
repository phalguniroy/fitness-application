const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
var flash = require('connect-flash');
var passport = require('passport');
var LocalStrategy = require("passport-local");

const User = require('./models/fitUser');


const auth = require('./routes/auth');
const dash = require('./routes/dash');
const setting = require('./routes/setting');
const routes = require('./routes/routes');


const session = require('express-session');
const mongoose = require('mongoose');

app.use(require("express-session")({
    secret:"sickrat",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
})





 mongoose.connect("mongodb+srv://phalguni:phalguni@cluster0.vyqlb.mongodb.net/phalguni?retryWrites=true&w=majority", {
    useNewUrlParser: true,
   useUnifiedTopology: true
}, function(error){
    if(!error)
    console.log("Server has been connected to mongodb");
});

const PORT = process.env.PORT || 9999;

app.use('/files', express.static('files'));

app.use( routes);
app.use( auth);
app.use( dash);
app.use( setting);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}




app.listen(PORT, function() {
	console.log("Application has started and running on port: ", PORT);
}).on('error', function(error) {
	console.log("Unable to start app. Error >>>>", error);
});


app.get('*', function(req, res) {
	res.render('404', {
		title: "404 Not Found"}
		);
  })
const express = require('express'); 
const app = express();
const exphbs = require('express-handlebars');
var flash = require('connect-flash');


const auth = require('./routes/auth');
const routes = require('./routes/routes');

const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');

app.use(session({
    name : 'test',
    secret : 'sickrat',
    resave: true, 
    rolling: false,
    saveUninitialized: true,
    cookie: {
        httpOnly : true,
        maxAge: 3600000,
        path: '/',
        sameSite: true,
        secure : false,
    }
}));

mongoose.connect("mongodb://localhost:27017/final-project", {
    useNewUrlParser: true,
   useUnifiedTopology: true
}, function(error){
    if(!error)
    console.log("Server has been connected to mongodb");
});

const PORT = 9999;

app.use('/files', express.static('files'));

app.use('/', routes);
app.use('/auth', auth);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');


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
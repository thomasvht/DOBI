/**
 * Created by Sander Verkaemer on 17/12/2016.
 */
"use strict";

let express    = require('express'),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose'),
    helpers    = require('./server/helpers/helpers'),
    port = 5000,
    ipaddress = null;

let APIRouter = require('./server/router/api.router'),
    authRouter = require('./server/router/auth.router');

let app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/lockD', function (err) {
    if(err)
        console.log("No DB connection!", err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

helpers.getIPAddress(function (err, address) {
    if(err)
        helpers.handleError(err);

    ipaddress = address;
});

app.all('/*', function(req, res, next) {
    // CORS  headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

//app.all('/api/*', [require('./server/middlewares/validateRequest')]);
app.use('/api', APIRouter);

app.post('/login', function (req,res){authRouter.login(req,res);});
app.post('/register', function (req,res){authRouter.register(req,res);});

app.get('/', function(req, res) {
    res.redirect('http://' + ipaddress + ":3000");
});

app.listen(port);
console.log('The magic happens on port:', ipaddress + ':' + port);

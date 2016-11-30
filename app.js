/**
 * Created by Sander Verkaemer on 23/11/2016.
 */
let express    = require('express');        // call express
let app        = express();                 // define our app using express
let bodyParser = require('body-parser');
let mongoose   = require('mongoose');
var logger = require('morgan');

let APIRouter = require('./Routes/APIRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

let port = process.env.PORT || 5000;        // set our port

mongoose.connect("mongodb://127.0.0.1:27017/Lock'D");

app.all('/*', function(req, res, next) {
    // CORS headers
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


app.get('/', function(req, res) {
    res.send('Redirect this to angular routes!' );
});

let auth = require('./Routes/auth');
app.post('/login', auth.login);

app.all('/api/*', [require('./middlewares/validateRequest')]);

app.use('/api', APIRouter);

app.listen(port);
console.log('The magic happens on port ' + port);
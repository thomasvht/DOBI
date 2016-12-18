/**
 * Created by Sander Verkaemer on 23/11/2016.
 */
let express    = require('express');        // call express
let app        = express();                 // define our app using express
let bodyParser = require('body-parser');
let mongoose   = require('mongoose');

let APIRouter = require('./server/Routes/APIRouter');
let User = require('./server/models/user');
let jwt = require('jwt-simple');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 5000;        // set our port

mongoose.connect("mongodb://127.0.0.1:27017/Lock'D");


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

app.post('/login', function (req,res) {
    let reqUser = req.body;

    User.findOne({email:reqUser.email},function (err, user) {
        if(err) throw (err);

        if(!user){
            res.send({'error': 'User not recognized!'});
            return;
        }

        if(!reqUser.password){
            res.send({'error': 'Wrong Password!'});
            return;
        }
        user.comparePasswords(reqUser.password, function(err, isMatch) {
            if(err) throw (err);

            if(!isMatch)
                res.send({'error':'Wrong Password!'});

            res.json(genToken(user));
        })
    });
});
app.post("/register",function (req,res) {
    let user = req.body;

    let newUser = new User({
        firstname: user.firstname,
        name: user.name,
        email: user.email,
        password: user.password,
        role: 'user'
    });

    User.findOne({email: newUser.email},function (err, user) {
        if (err) throw (err);

        if (user) {
            res.send({'error': 'User already exists!'});
            return;
        }

        newUser.save(function (err) {
            res.json(genToken(newUser));
        });
    });
});

//app.all('/api/*', [require('./server/middlewares/validateRequest')]);
app.use('/api', APIRouter);

app.get('/', function(req, res) {
    res.redirect('http://localhost:3000');
});

app.listen(port);
console.log('The magic happens on port: ' + port);

function genToken(user) {
    let expires = expiresIn(8); // 7 days
    let token = jwt.encode({
        exp: expires
    }, require('./server/config/secret')());

    user.friendList = null;

    return {
        token: token,
        expires: expires,
        user: user
    };
}
function expiresIn(numDays) {
    let dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
}


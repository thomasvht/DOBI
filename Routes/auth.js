/**
 * Created by Sander Verkaemer on 27/11/2016.
 */
let jwt = require('jwt-simple');

let auth = {

    login: function(req, res) {

        let username = req.body.username || '';
        let password = req.body.password || '';

        if (username == '' || password == '') {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid Credentials!"
            });
            return;
        }

        // Fire a query to your DB and check if the credentials are valid
        let dbUserObj = auth.validate(username, password);

        if (!dbUserObj) { // If authentication fails, we send a 401 back
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
            return;
        }

        if (dbUserObj) {

            // If authentication is success, we will generate a token
            // and dispatch it to the client

            res.json(genToken(dbUserObj));
        }

    },

    validate: function(username, password) {
        // spoofing the DB response for simplicity
        let dbUserObj = { // spoofing a userobject from the DB.
            name: 'arvind',
            role: 'user',
            username: 'arvind@myapp.com'
        };

        return dbUserObj;
    },

    validateUser: function(username) {
        // spoofing the DB response for simplicity
        let dbUserObj = { // spoofing a userobject from the DB.
            name: 'arvind',
            role: 'user',
            username: 'arvind@myapp.com'
        };

        return dbUserObj;
    },
};

// private method
function genToken(user) {
    let expires = expiresIn(7); // 7 days
    let token = jwt.encode({
        exp: expires
    }, require('../config/secret')());

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

module.exports = auth;
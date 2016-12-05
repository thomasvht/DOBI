/**
 * Created by Sander Verkaemer on 27/11/2016.
 */
let User = require('../models/user');
let jwt = require('../services/jwt');

let auth = {

    login: function(req, res) {
        let Requser = req.body;

        User.findOne({email:Requser.email},function (err, user) {
            if(err) throw err;

            if(!user)
                return res.send({'message':'Wrong!'});


            user.comparePasswords(Requser.password, function(err, isMatch) {
                if(err) throw err;

                console.log(isMatch);
                if(!isMatch)
                    return res.send({'message':'Wrong Password!'});

                createToken(user,res);
            })
        })
    },


    register : function (req, res) {
        let user = req.body;

        let newUser = new User({
            firstname: user.firstname,
            name: user.firstname,
            email: user.email,
            password: user.password
        });

        newUser.save(function(err){
            createToken(newUser,res);
        });
    }
};

function createToken(user,res) {

    const secret = "xxx";

    let payload = {user:user};
    console.log(payload);
    let token = jwt.encode(payload, secret);

    let decoded = jwt.decode(token, secret);
    console.log(decoded);

    res.status(200).send({
        user : user.toJSON(),
        token : token
    });
}
/*
 var jwt = require('jwt-simple');
 var payload = { foo: 'bar' };
 var secret = 'xxx';

 // HS256 secrets are typically 128-bit random strings, for example hex-encoded:
 // var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex)

 // encode
 var token = jwt.encode(payload, secret);

 // decode
 var decoded = jwt.decode(token, secret);
 console.log(decoded); //=> { foo: 'bar' }
 */
module.exports = auth;
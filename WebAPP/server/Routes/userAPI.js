/**
 * Created by Sander Verkaemer on 12/12/2016.
 */
const router = require('express').Router();

let User = require('../models/user');
let FriendRequest = require('../models/friendRequest');

router.route("/addRequest").post(function (req, res) {
    let friendRequest = new FriendRequest();
    friendRequest.Sender = req.body.Sender;
    friendRequest.Receiver = req.body.Receiver;

    friendRequest.save(function(err) {
        if (err)
            res.json({ error: err });

        res.json({ message: 'Request send' });
    });
});

router.route("/acceptRequest/:request_id").post(function (req, res) {
    let receiver = new User;
    let sender = new User;

    FriendRequest.findById(req.params.request_id, function(err, requests) {
        if (err)
            res.json({ error: err });

        if (requests == null){
            res.send({'error': 'Request not found'});
        }
        else{
            User.findByEmail(requests.Receiver, function (err, Receiver) {
                if (err)
                    res.send(err);

                if (!Receiver) {
                    res.send({'error': 'Receiver not found'});
                }

                receiver.name = Receiver[0].name;
                receiver.firstname = Receiver[0].firstname;
                receiver.email = Receiver[0].email;
                receiver._id = Receiver[0]._id;

                User.findByEmail(requests.Sender, function (err, Sender) {
                    if (err)
                        res.send(err);

                    if (!Sender) {
                        res.send({'error': 'Sender not found'});
                    }

                    sender.name = Sender[0].name;
                    sender.firstname = Sender[0].firstname;
                    sender.email = Sender[0].email;
                    sender._id = Sender[0]._id;

                    Sender[0].friendList += receiver;
                    Sender[0].save(function(err) {
                        if (err)
                            res.send(err);
                    });

                    Receiver[0].friendList += sender;
                    Receiver[0].save(function(err) {
                        if (err)
                            res.send(err);
                    });
                });
            });
        }
    }).remove(function(err,removed) {
        if (err)
            res.json({ error: err });
    });

    res.send({"message":"Request Accepted"});
});

router.route("/getRequests/:receiver_id").get(function (req,res) {
    FriendRequest.findByReceiver(req.params.receiver_id, function(err, requests) {
        if (err)
            res.json({ error: err });

        res.json(requests);
    });
});

router.route("/getFriends/:user_email").get(function (req,res) {
    console.log("getFriends called! (userAPI:92) ");

    User.findFriendsByEmail(req.params.user_email, function(err, user) {
        if (err)
            res.json({ error: err });

        if(!user)
            res.json({ error: "No user"});

        res.json(user[0].friendList[0]);
    });
});

module.exports = router;
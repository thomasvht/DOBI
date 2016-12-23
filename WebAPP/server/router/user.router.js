/**
 * Created by Sander Verkaemer on 17/12/2016.
 */
const router = require('express').Router();

let FriendRequest = require('../models/friendRequest.model'),
    helpers = require('../helpers/helpers'),
    User = require('../models/user.model');

router.route("/addRequest").post(function (req, res) {
    if(!req.body.Sender || !req.body.Receiver){
        res.json({"error":"Both fields must be completed"});
    }else{
        let friendRequest = new FriendRequest();
        friendRequest.Sender = req.body.Sender;
        friendRequest.Receiver = req.body.Receiver;

        User.findById(friendRequest.Sender, function(err, Sender) {
            if (err) {
                helpers.handleError(err);
                res.json({'error': "There went something wrong"});
                return;
            }

            if(!Sender){
                res.json({'error': "Sender is not recognized"});
                return;
            }else{
                User.findById(friendRequest.Receiver, function(err, Receiver) {
                    if (err) {
                        helpers.handleError(err);
                        res.json({'error': "There went something wrong"});
                        return;
                    }

                    if(!Receiver){
                        res.json({'error': "Receiver is not recognized"});
                        return;
                    }else{
                        friendRequest.save(function(err) {
                            if (err){
                                helpers.handleError(err);
                                res.json({"error":"Something went wrong!"});
                            }else{
                                res.json({ 'message': 'Request send' });
                            }
                        });
                    }
                });
            }
        });
    }
});

router.route("/acceptRequest/:request_id").get(function (req, res) {
    FriendRequest.findById(req.params.request_id, function(err, requests) {
        let Sender,Receiver;
        if (err) {
            helpers.handleError(err);
            return res.json({'error': "There went something wrong"});
        }else{
            if(!requests){
                return res.json({'error': "No request found"});
            }else{
                User.findById(requests.Receiver,function (err, ReceiverUser) {
                    if (err) {
                        helpers.handleError(err);
                        return res.json({'error': "There went something wrong"});
                    }else{
                        Receiver = {
                            "Name":ReceiverUser.Name,
                            "Firstname":ReceiverUser.Firstname,
                            "Email":ReceiverUser.Email
                        };
                        User.findById(requests.Sender,function (err, SenderUser) {
                            if (err) {
                                helpers.handleError(err);
                                return res.json({'error': "There went something wrong"});
                            }else {
                                Sender = {
                                    "Name": SenderUser.Name,
                                    "Firstname": SenderUser.Firstname,
                                    "Email": SenderUser.Email
                                };

                                SenderUser.FriendList.push(Receiver);
                                User.update({_id: SenderUser._id}, {
                                    FriendList: SenderUser.FriendList,
                                }, function(err, affected, resp) {
                                });

                                ReceiverUser.FriendList.push(Sender);
                                User.update({_id: ReceiverUser._id}, {
                                    FriendList: ReceiverUser.FriendList,
                                }, function(err, affected, resp) {
                                });

                                FriendRequest.find({ _id:requests._id }).remove().exec();

                                return res.json({'message':'Request accepted'});
                            }
                        });

                    }
                })
            }
        }
    })
});
router.route("/getRequests/:receiver_id").get(function (req,res) {
    FriendRequest.findByReceiver(req.params.receiver_id, function(err, requests) {
        if (err) {
            helpers.handleError(err);
            return res.json({'error': "There went something wrong"});
        }

        res.json(requests);
    });
});

router.route("/getFriends/:user_email").get(function (req,res) {
    User.findFriendsByEmail(req.params.user_email, function(err, result) {
        if (err) {
            helpers.handleError(err);
            return res.json({'error': "There went something wrong"});
        }

        if(result[0] == undefined)
            return res.json({'error': "User not found"});

        res.json(result[0].FriendList);
    });
});


module.exports = router;
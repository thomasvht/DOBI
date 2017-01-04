/**
 * Created by Sander Verkaemer on 09/12/2016.
 */

"use strict";

let socket;

module.exports = {
    init : function (io) {
        socket = io;
        io.sockets.on('connection', function (socket) {
            console.log('socket connected');
        });
    },

    bikeMoved : function (Location) {
        socket.emit("BikeMoved", Location);
    }
};



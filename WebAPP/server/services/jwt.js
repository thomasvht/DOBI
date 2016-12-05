/**
 * Created by Sander Verkaemer on 03/12/2016.
 */

let crypto = require('crypto');

exports.encode = function (payload, secret) {
  let algorithm = 'HS256';

  let header = [
      typ = 'JWT',
      alg = algorithm
    ];

  var jwt = base64Encode(header) + '.' + base64Encode(payload);

  return jwt + '.' + sign(jwt, secret);
};

function sign(str, key) {
    return crypto.createHmac('sha256', key).update(str).digest('base64');
}

function base64Encode(str) {
    return new Buffer(str).toString('base64');
}
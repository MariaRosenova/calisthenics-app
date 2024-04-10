const jwt = require('jsonwebtoken');
//const util = require('util');

function sign(payload, secretOrPrivateKey, options = {}) {
    const promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secretOrPrivateKey, options, (err, token) => {
            if (err) {
                return reject(err);
            }

            resolve(token);
        });
    });
    return promise;
};

function verify(token, secretOrPrivateKey, options = {}) {
    const promise = new Promise((resolve, reject) => {
      jwt.verify(token, secretOrPrivateKey, options, (err, tokenVerified) => {
        if (err) {
            return reject(err);
        }
        resolve(tokenVerified);
      });
    });
    return promise;
};
//const sign = util.promisify(jwt.sign);
//const verify = util.promisify(jwt.verify);

module.exports = {
    sign,
    verify
}
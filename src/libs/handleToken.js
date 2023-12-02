const { sign, verify } = require("jsonwebtoken");
const { PRIVATEKEY } = require("../libs/handleConfig");

const signinToken = (payload) => {
  return new Promise((resolve, reject) => {
    sign(payload, PRIVATEKEY, (err, token) => {
      if (err) return reject(err);
      return resolve(token);
    });
  });
};

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    verify(token, PRIVATEKEY, (err, res) => {
      if(err) return reject(err);
      return resolve(res);
    })
  })
}

module.exports = {
  signinToken,
  verifyToken
};

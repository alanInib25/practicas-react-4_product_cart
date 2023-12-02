const { hash, compare } = require("bcryptjs");

//hash password
const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    hash(password, 10, (err, res) => {
      if(err) return reject(err);
      return resolve(res);
    })
  })
}

//compare password
const comparePassword = (password, hash) => {
  return new Promise((resolve, reject) => {
    compare(password, hash, (err, res) => {
      if(err) return reject(error);
      return resolve(res);
    })
  })
}

module.exports = {
  hashPassword,
  comparePassword
}
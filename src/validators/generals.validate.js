const { check } = require("express-validator");
const validateResult = require("../libs/handleValidator");
const tokenValidate = [
  check("token")
    .exists()
    .notEmpty()
    .isString()
    .isJWT()
    .withMessage("Error en credenciales"),
  (req, res, next) => validateResult(req, res, next),
];


module.exports = {
  tokenValidate
}
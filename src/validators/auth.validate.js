const { check } = require("express-validator");
const validateResult = require("../libs/handleValidator");

const registerUserValidate = [
  check("username")
    .exists()
    .notEmpty()
    .withMessage("Username es requerido")
    .trim()
    .isString(),
  check("email")
    .exists()
    .notEmpty()
    .withMessage("Email es requerido")
    .trim()
    .isString()
    .isEmail()
    .withMessage("Email es inválido"),
  check("password")
    .exists()
    .notEmpty()
    .withMessage("Password es requerida")
    .trim()
    .isString()
    .isLength({ min: 6 })
    .withMessage("Password mínimo 6")
    .isLength({ max: 12 })
    .withMessage("Password máximo 12"),
  (req, res, next) => validateResult(req, res, next),
];

const loginUserValidate = [
  check("email")
    .exists()
    .notEmpty()
    .withMessage("Email es requerido")
    .trim()
    .isString()
    .isEmail()
    .withMessage("Email es inválido"),
  check("password")
    .exists()
    .notEmpty()
    .withMessage("Password es requerida")
    .trim()
    .isString()
    .isLength({ min: 6 })
    .withMessage("Password mínimo 6")
    .isLength({ max: 12 })
    .withMessage("Password máximo 12"),
  (req, res, next) => validateResult(req, res, next),
];

module.exports = {
  registerUserValidate,
  loginUserValidate
};

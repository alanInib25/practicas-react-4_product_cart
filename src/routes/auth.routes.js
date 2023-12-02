const { Router } = require("express");
const authRoutes = Router();

//validador de datos para registro de usuario
const {
  registerUserValidate,
  loginUserValidate,
} = require("../validators/auth.validate.js");
const { tokenValidate } = require("../validators/generals.validate.js");

//middleware
const { authRequire } = require("../middlewares/validateJWT");
//Controllers
const {
  authRegister,
  authLogin,
  authLogout,
  authVerify
} = require("../controllers/auth.controllers");

authRoutes.post("/register", registerUserValidate, authRegister);
authRoutes.post("/login", loginUserValidate, authLogin);
authRoutes.post("/logout", tokenValidate, authRequire, authLogout);
authRoutes.get("/verify",tokenValidate, authRequire, authVerify)
module.exports = authRoutes;

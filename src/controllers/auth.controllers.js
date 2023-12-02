const User = require("../models/user.model");

//gestion de password
const { hashPassword, comparePassword } = require("../libs/handleHashPassword");

//token
const { signinToken } = require("../libs/handleToken");

const authRegister = async (req, res) => {
  try {
    //data sanitizada desde express-validator
    const userData = req.user_data;

    //valida userame duplicado;
    const username = await User.findOne({ username: userData.username });
    if (username)
      return res.status(400).send([{ message: "Ya existe username" }]);

    //valida email duplicado;
    const email = await User.findOne({ email: userData.email });
    if (email) return res.status(400).send([{ message: "Ya existe email" }]);

    //crea el usuario
    userData.password = await hashPassword(userData.password);
    const user = await new User({
      ...userData,
    }).save();

    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send([{ message: error.message }]);
  }
};

const authLogin = async (req, res) => {
  try {
    //data sanitizada desde express-validator
    const userData = req.user_data;
    const user = await User.findOne({ email: userData.email });

    const checkPassword =
      user === null
        ? false
        : await comparePassword(userData.password, user.password);

    if (!checkPassword) throw new Error("Credenciales incorrectas");

    //genera token
    const token = await signinToken({ id: user._id, role: user.role });
    res.cookie("token", token);

    /*quita el password al enviar a cliente*/
    user.set("password", undefined);

    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send([{ message: error.message }]);
  }
};

const authLogout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.sendStatus(200);
};

const authVerify = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if(!user) return res.status(400).send([{ message: "Unauthorized"}]);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send([{ message: error.message }]);
  }
};

module.exports = {
  authRegister,
  authLogin,
  authLogout,
  authVerify,
};

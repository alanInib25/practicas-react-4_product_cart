const { verifyToken } = require("../libs/handleToken");

const authRequire = async (req, res, next) => {
  try {
    const { token } = req.user_data;
    const user = !token ? false : await verifyToken(token);
    if (!user) return res.status(400).send("Token inválido");
    req.userId = user.id;
    return next();
  } catch (error) {
    return res.status(400).send([{ message: error.message }]);
  }
};

module.exports = {
  authRequire,
};

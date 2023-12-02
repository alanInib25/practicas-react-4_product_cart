const { validationResult, matchedData } = require("express-validator");

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    req.user_data = matchedData(req);
    return next();
  } catch ({ errors }) {
    const oldErrors = errors.map(({ path, msg: message, value }) => ({
      path,
      message,
      value,
    }));
    return res.status(400).send(oldErrors);
  }
};

module.exports = validateResult;

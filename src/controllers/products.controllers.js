const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(400).send([{ message: error.message }]);
  }
};

module.exports = { getProducts };

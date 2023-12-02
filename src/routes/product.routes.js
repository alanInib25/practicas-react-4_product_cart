const { Router } = require("express");
const productRouter = Router();
const { getProducts } = require("../controllers/products.controllers");

productRouter.get("/products", getProducts);

module.exports = productRouter;

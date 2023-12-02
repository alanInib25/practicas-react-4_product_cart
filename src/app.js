const express = require("express");
const app = express();
const cookieParse = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");

//middlewares nivel app
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParse());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);

//repositorio público

module.exports = app;

const { Schema, model } = require("mongoose");
const productSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    price: {
      type: Number,
      require: true,
      trim: true,
    },
    discountPercentage: {
      type: Number,
      require: true,
      trim: true,
    },
    rating: {
      type: Number,
      require: true,
      trim: true,
    },
    stock: {
      type: Number,
      require: true,
      trim: true,
    },
    brand: {
      type: String,
      require: true,
      trim: true,
    },
    category: {
      type: String,
      require: true,
      trim: true,
    },
    thumbnail: {
      type: String,
      require: true,
      trim: true,
    },
    images: {
      type: [],
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("Product", productSchema);

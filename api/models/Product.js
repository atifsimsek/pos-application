const mongoose = require("mongoose");
const ProductShecma = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("products", ProductShecma);

module.exports = Product;

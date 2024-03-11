const mongoose = require("mongoose");
const CategoryShecma = new mongoose.Schema(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
);

const Category = mongoose.model("category", CategoryShecma);

module.exports = Category;

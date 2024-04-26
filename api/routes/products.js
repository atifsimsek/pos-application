const Product = require("../models/Product");
const express = require("express");
const router = express.Router();

// Get

router.get("/get-all", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(err);
  }
});

// Post

router.post("/add-product", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json("item added succesfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update

router.put("/update-product", async (req, res) => {
  try {
    await Product.findOneAndUpdate({ _id: req.body.productId }, req.body);
    res.status(200).json("item updated succesfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete

router.delete("/delete-product", async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.body.productId });
    res.status(200).json("item deleted succesfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

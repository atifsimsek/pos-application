const Category = require("../models/Category");
const express = require("express");
const router = express.Router();

// Get

router.get("/get-all", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post

router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("item added succesfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update

router.put("/update-category", async (req, res) => {
  try {
    await Category.findOneAndUpdate({ _id: req.body.categoryId }, req.body);
    res.status(200).json("item updated succesfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete

router.delete("/delete-category", async (req, res) => {
  try {
    await Category.findOneAndDelete({ _id: req.body.categoryId });
    res.status(200).json("item deleted succesfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

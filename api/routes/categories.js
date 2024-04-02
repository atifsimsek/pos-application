const Category = require("../models/Category");
const express = require("express");
const router = express.Router();

// Get

router.get("/get-all", async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
  }
});

// Post

router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("item added succesfully");
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update

router.put("/update-category/:id", async (req, res) => {
  try {
    await Category.findOneAndUpdate({ _id: req.body.categoryId }, req.body);
    res.status(200).json("item updated succesfully");
  } catch (err) {
    console.log(err);
  }
});

// Delete

router.delete("/delete-category/:id", async (req, res) => {
  try {
    await Category.findOneAndDelete({ _id: req.params.categoryId });
    res.status(200).json("item deleted succesfully");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

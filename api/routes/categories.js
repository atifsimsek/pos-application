const Category = require("../models/Category");
const express = require("express");
const router = express.Router();
router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("item added succesfully");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

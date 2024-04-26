const Bill = require("../models/Bill");
const express = require("express");
const router = express.Router();

// Get

router.get("/get-all", async (req, res) => {
  try {
    const bills = await Bill.find();
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json(err);
  }
});

// Post

router.post("/add-bill", async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    await newBill.save();
    res.status(200).json("Bill added succesfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

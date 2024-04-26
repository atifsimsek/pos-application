const User = require("../models/User");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
// Register

//bycripts

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json("User created succesfully");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

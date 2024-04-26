const User = require("../models/Register");
const express = require("express");
const router = express.Router();

// Register

//bycripts

router.post("/add-auth", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser= new User({
      username,
      email,
      password:hashedPassword
    })
    await newUser.save();
    res.status(200).json("item added succesfully");
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;

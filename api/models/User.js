const mongoose = require("mongoose");
const UserShecma = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserShecma);

module.exports = User;

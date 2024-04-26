const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const port = 5000;

// Routes
const categoryRoute = require("./routes/categories");
const productRoute = require("./routes/products.js");
const billRoute = require("./routes/bills.js");
const authRoute = require("./routes/auth.js")

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    throw err;
  }
};

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills",billRoute)
app.use("/api/auth",authRoute)


app.get("/", (req, res) => res.send("Hello World   !"));

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});

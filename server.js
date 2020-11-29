const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRouter");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
const cors = require("cors");

connectDB();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.listen("5000", () => {
  console.log(`Server started`);
});

const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRouter");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
const cors = require("cors");
const path = require("path");
connectDB();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  });
}
const port =  process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server started`);
});

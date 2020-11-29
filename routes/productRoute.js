const express = require("express");
const productRoute = express.Router();
const Product = require("../models/productModel");
const { isAuth } = require("../utils");

productRoute.post("/", isAuth, async (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    quantity_available: req.body.quantity_available,
  });

  const savedProduct = await product.save();

  res.status(200).json({
    product: savedProduct,
  });
});

productRoute.get("/", isAuth, async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRoute.put("/", isAuth, async (req, res) => {
  try {
    const { cartItems } = req.body;
    for (let cartItem of cartItems) {
      cartItem.quantity_available -= cartItem.quantity;
      await Product.update(
        { _id: cartItem._id },
        { quantity_available: cartItem.quantity_available },
        { multi: true }
      );
    }
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = productRoute;

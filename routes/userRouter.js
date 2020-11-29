const User = require("../models/userModel");
const express = require("express");
const bcrypt = require("bcryptjs");
const { generateToken, isAuth } = require("../utils");

const userRouter = express.Router();

userRouter.get("/", isAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");
    res.json(user);
  } catch (error) {}
});

userRouter.post("/signup", async (req, res) => {
  try {
    let user = await User.find({ email: req.body.email });
    if (user.length) {
      res.status(401).json({ message: "Email already exists" });
    }

    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      password: createdUser.password,
      token: generateToken(createdUser),
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

userRouter.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const bool = await bcrypt.compare(req.body.password, user.password);
      if (bool) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user),
        });
      } else {
        res.status(401).json({ message: "Wrong password" });
      }
    } else {
      res.status(401).json({ message: "Email do not exist" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = userRouter;

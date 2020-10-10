const express = require("express");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const User = require("../models/User");
const Todo = require("../models/Todo");

// @public
// @desc   Registration route
// Searches database to make sure the username is not already taken
userRouter.post("/register", (req, res) => {
  const { username, password, role } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      return res
        .status(500)
        .json({
          message: { msgBody: "An error has happened..", msgError: true },
        });
    }
    if (user) {
      return res
        .status(400)
        .json({
          message: { msgBody: "Username already taken..", msgError: true },
        });
    }
    const newUser = new User({
      username,
      password,
      role,
    });
    newUser.save((err) => {
      if (err) {
        return res
          .status(500)
          .json({
            message: { msgBody: "Error saving to db..", msgError: true },
          });
      } else {
        return res
          .status(201)
          .json({ message: { msgBody: "Success!", msgError: false } });
      }
    });
  });
});

const express = require("express");
const JWT = require("jsonwebtoken");
const userRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const User = require("../models/User");
const Todo = require("../models/Todo");

const key = process.env.JWT_KEY;

//////Token signing fun, JWT. Takes in payload, key, and options
const signToken = (userId) => {
  return JWT.sign(
    {
      iss: "Your mom",
      sub: userId,
    },
    key,
    { expiresIn: "1h" }
  );
};

// @public
// @desc   Registration route
// Searches database to make sure the username is not already taken
userRouter.post("/register", (req, res) => {
  const { username, password, role } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      return res.status(500).json({
        message: { msgBody: "An error has happened..", msgError: true },
      });
    }
    if (user) {
      return res.status(400).json({
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
        return res.status(500).json({
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

/////////// Login route
userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id, username, role } = req.user;
      const token = signToken(_id);
      ///Set so that the cookie can't be touched using JavaScript with httpOnly, samesite protects against CSFX atttacks
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res.status(200).json({ isAuthenticated: true, user: { username, role } });
    }
  }
);

////// Logout route, GET
userRouter.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.clearCookie("access_token");
    res.json({ user: { username: "", role: "" }, success: true });
  }
);

////// Todo app route Post, add item
userRouter.post(
  "/todo",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    /// request from client, create new instance of mongoose model todoSchema
    const todo = new Todo(req.body);
    todo.save((err) => {
      if (err)
        res
          .status(500)
          .json({ message: { msgBody: "Error db" }, success: false });
      else {
        req.user.todos.push(todo);
        req.user.save((err) => {
          if (err)
            res
              .status(500)
              .json({ message: { msgBody: "Error db" }, success: false });
          else
            res
              .status(200)
              .json({ message: { msgBody: "Created to do" }, msgError: false });
        });
      }
    });
  }
);

// todo GET route, fetch list of items

userRouter.get(
  "/todo",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    ///Find todos list if it exists
    User.findById({ _id: req.user._id })
      .populate("todos")
      .exec((err, document) => {
        if (err) {
          res.status(500).json({
            message: { msgBody: "Error fetching list" },
            success: false,
          });
        } else {
          res.status(200).json({ todos: document.todos, authenticate: true });
        }
      });
  }
);

// Admin route
userRouter.get(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    ///Find todos list if it exists
    if (req.user.role === "admin") {
      res
        .status(200)
        .json({ message: { msgBody: "Admin verified" }, msgError: false });
    } else {
      res
        .status(403)
        .json({ message: { msgBody: "Not an admin" }, msgError: true });
    }
  }
);

// Keeps backend and frontend synced for auth, allows browser to close and open and user does not have log in again. For React;
userRouter.get(
  "/auth",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req);
    const { username, role } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { username, role } });
  }
);

module.exports = userRouter;

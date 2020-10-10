///Mongo models with mongoose

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

///Schema, a blueprint that every document in this model must follow
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 15,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
  },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todo" }],
});

///Mongoose prehook, executes right before it is saved to DB; basically middleware for mongoose. Use normal, not arrow functions.

UserSchema.pre("save", function (next) {
  //Checks the current instance to see if the pword field was modified, and moves onto the next if it has already been hashed.
  if (!this.isModified("password")) {
    return next();
  }
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err);
    this.password = passwordHash;
    next();
  });
});

//Methods, this one compares passwords
UserSchema.methods.comparePassword = function (password, callback) {
  ///takes in the password, the hashed password, and a cb
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    } else {
      if (!isMatch) {
        return callback(null, isMatch);
      }
      return callback(null, this);
    }
  });
};
const User = mongoose.model("User", UserSchema);
module.exports = User;

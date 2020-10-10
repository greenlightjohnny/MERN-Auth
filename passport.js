const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt");

const User = require("./models/User");
const key = process.env.JWT_KEY;

////extract cookie from req obj
const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

////Middleware used for authorization, protecting some endpoints
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: key,
    },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done;
        }
      });
    }
  )
);

///Authentication middleware, login only
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      ///Db error
      if (err) {
        return done(err);
      }
      //Username not found
      if (!user) {
        return done(null, false);
      }
      ///User found, compare using the function in the User model
      if (user) {
        user.comparePassword(password, done);
      }
    });
  })
);

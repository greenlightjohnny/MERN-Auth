const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
//dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");

const corsOptions = {
  origin: "https://mern-skeleton.netlify.app/",
};

const app = express();
app.use(cors(corsOptions));

app.use(cookieParser());
// Parse JSON sent from client
app.use(express.json());

const mongoDB = process.env.MONGO_URI;
console.log("$$", mongoDB);
mongoose.connect(
  mongoDB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => console.log("Connected to DB")
);

const userRouter = require("./routes/User");
app.use("/user", userRouter);

// app.get("/", (req, res) => {
//   res.send("Hello from Express!");
// });

// const User = require("./models/User");
// const userInput = {
//   username: "waawaa",
//   password: "12345678",
//   role: "user",
// };

// const user = new User(userInput);
// user.save((err, document) => {
//   if (err) console.log(err);
//   console.log(document);
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});

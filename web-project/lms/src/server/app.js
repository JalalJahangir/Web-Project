// Requiring module
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

mongoose.connect(
  "mongodb://127.0.0.1:27017/lms",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);

const User = require("./models/user");

var bodyParser = require("body-parser");

// Creating express object
const app = express();
var cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Defining port number
const PORT = 44444;

const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});

var upload = multer({ storage: storage });

// Function to serve all static files
// inside public directory.
app.use(express.static("public"));
app.use("/images", express.static("images"));

app.post("/api/courses", upload.single("courseImage"), function (req, res) {
  if (req.file) {
    console.dir(req.file);
    return res.end("File uploaded sucessfully");
  }
  res.end("File not uploaded");
});

app.post(
  "/api/user/register",
  upload.single("profilePic"),
  function (req, res) {
    if (req.file) {
      console.dir(req.file);
      res.send({
        profilePic:
          "http://localhost:44444/" +
          req.file.path.replace("public", "").replace(/\\/g, "/"),
      });
    }
  }
);

app.post("/api/login", function (req, res) {
  let user = new User();
  console.log(req.body);
  user.findOne({ userName: res.body.username }, function (err, user) {
    if (err) {
      console.log(err);
      throw err;
    }
    if (!user) {
      res.send({
        success: false,
        message: "User account cannot be found",
      });
    } else if (user) {
      console.log("it goes here");

      var validPassword = req.body.password === user.password;
      if (!validPassword) {
        res.send({
          success: false,
          message: "Incorrect password",
        });
      } else {
        console.log(user);
        res.send({
          success: true,
          user: user,
        });
      }
    }
  });
});

//http://localhost:44444/api/user/register

// Server setup
app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
});

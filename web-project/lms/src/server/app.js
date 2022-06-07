// Requiring module
var router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("user");

const express = require("express");
const path = require("path");

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

app.post("/api/login", function (req, res) {});

//http://localhost:44444/api/user/register

// Server setup
app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
});

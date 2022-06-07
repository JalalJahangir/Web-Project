// Requiring module
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('user');


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

//for register 
app.post("/api/register" , function(req,res){


  if(req.file){

    var user = new User();
    user.userName = req.body.userName ;
    user.password = req.body.password ; 

    user.email = req.body.email ;
    user.phone = req.body.phone ;
    
    user.address = req.body.address ;
    user.fullName = req.body.fullName ;
    
    user.dob = req.body.dob ;
    user.registered = req.body.registered ;  
   
    user.save((err, doc) => {
        if (!err)
            res.redirect('/login');
    });

  }

}); 

// Server setup
app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
});

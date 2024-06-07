const mongoose = require("mongoose");

const mongodbURL = "mongodb://localhost:27017/lms";

mongoose.connect(
  mongodbURL,
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);

require("./user.model");

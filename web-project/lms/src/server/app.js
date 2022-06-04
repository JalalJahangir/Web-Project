// Requiring module
const express = require("express");

// Creating express object
const app = express();

// Defining port number
const PORT = 44444;

// Function to serve all static files
// inside public directory.
app.use(express.static("public"));
app.use("/images", express.static("images"));

// Server setup
app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
});

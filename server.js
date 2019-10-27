// application dependencies
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const winston = require("./config/winston");

// import util
// const { convertDNAtoASCII, convertRNAtoASCII } = require('./util/toASCII');
const convertDNAtoASCII = require('./util/toASCII')['convertDNAToASCII'];
const convertRNAtoASCII = require('./util/toASCII')['convertRNAToASCII'];

const app = express();

// Server port number
var PORT = process.env.PORT || 8080;

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined", { stream: winston.stream }));

app.use(express.static("views"));

// Route to serve landing page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.post("/logrequest", (req, res) => {
  winston.info("Made a post request to /logrequest");
});

// Route for encoding arbitrary standard ASCII code to DNA/RNA
app.post("/dna", (req, res) => {
  const { type, string } = req.body;

  console.log('DNA called!');
  
  if(type === "dna"){
    // Function to send back dna
    res.send(convertDNAtoASCII(string));
  } else {
    // Function to send back rna
    res.send(convertRNAtoASCII(string));
  }
});

app.listen(PORT, () => {
  winston.info(`Server is running on port ${PORT}`);
});

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

const lcs = require('./util/LCS')['findLongestCommonSubstring'];

const app = express();

// Server port number
var PORT = process.env.PORT || 8080;

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined", { stream: winston.stream }));

app.use(express.static("views"));

// Route to serve landing page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.post("/logrequest", (req, res) => {
  winston.info("Made a post request to /logrequest");
});

// Route for encoding arbitrary standard ASCII code to DNA/RNA
app.post("/dna", (req, res) => {
  const { type, string } = req.body;

  let date = new Date();
  const startTime = date.getTime();

  console.log('DNA called!');

  if (type === "dna") {
    // Function to send back dna
    //console.log("asdasdadasdasda: ", convertDNAtoASCII(string));
    res.send(convertDNAtoASCII(string));
  } else {
    // Function to send back rna
    res.send(convertRNAtoASCII(string));
  }
  date = new Date();
  const endTime = date.getTime();

  winston.info('User string: ' + string);
  winston.info('Time: ' + (endTime - startTime) + 'ms')
});

// Route for comparing DNA/RNA strings
app.post("/compare", (req, res) => {
  const { type, string1, string2 } = req.body;

  console.log('DNA called!');

  if (type === "dna") {
    // Function to send back dna
    const result1 = convertDNAtoASCII(string1);
    const result2 = convertDNAtoASCII(string2);
    const compareResult = lcs(result1, result2);

    const results = {result1, result2, compareResult};

    res.send(results);
  } else {
    // Function to send back rna
    res.send(convertRNAtoASCII(string2));
  }
});

app.listen(PORT, () => {
  winston.info(`Server is running on port ${PORT}`);
});

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const winston = require("./config/winston");

const app = express();

var PORT = process.env.PORT || 8080;

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined", { stream: winston.stream }));

app.use(express.static("views"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.listen(PORT, () => {
  winston.info(`Server is running on port ${PORT}`);
  console.log(`Server is running on port ${PORT}`);
});

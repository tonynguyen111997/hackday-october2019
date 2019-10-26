const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");

const app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("views"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

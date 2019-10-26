const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('IT works');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
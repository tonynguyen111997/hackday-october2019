const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const winston = require('./config/winston');

const app = express();

const PORT = 8080;

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined', { stream: winston.stream }));

app.get('/', (req, res) => {
  res.send('IT works');
});

app.listen(PORT, () => {
  winston.info(`Server is running on port ${PORT}`);
  console.log(`Server is running on port ${PORT}`)
});
const winston = require('winston');
const { format } = require('winston');
require('winston-daily-rotate-file');


const moment = require('moment');
const timestamp = moment().format('DD-MM-YYYY HH:mm:ss');

// Settings to create a new log file every day. Can be found in logs folder.
const transport = new (winston.transports.DailyRotateFile)({
  filename: __dirname + '/../logs/winston-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '5242880', // 5mb
  maxFiles: '5',
  timestamp
});

// instantiate a new Winston Logger with the settings defined above
const logger = winston.createLogger({
  transports: [
    transport
  ],
  exitOnError: false, // do not exit on handled exceptions
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.simple()
  ),
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function(message, encoding){
    logger.info(message);
  }
}

module.exports = logger;
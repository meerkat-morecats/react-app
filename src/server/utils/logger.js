/**
 * @description winston logger 打印配置
 */

const winston = require('winston');
const path = require('path');
const moment = require('moment');
const LOG_PATH = path.join(process.cwd(), 'dist/logs/error.log');
const { printf, combine, timestamp, label, } = winston.format;

const format = printf(options => {
  const { level, message, } = options;
  const time = moment().format('YYYY-MM-DD hh:mm:ss');
  return `${time} [${level}] - ${message}`;
});

const ERROR_CONFIG = {
  transports:
    process.env.NODE_ENV === 'prod'
      ? [new winston.transports.File({ filename: LOG_PATH, }),]
      : [
        new winston.transports.Console(),
        new winston.transports.File({ filename: LOG_PATH, }),
      ],
  // level: 'error',
  format: combine(label({ label: '', }), timestamp(), format),
};

module.exports = winston.createLogger(ERROR_CONFIG);

// logger.error('This is an information message.', { test: 123 });

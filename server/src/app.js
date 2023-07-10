const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());

module.exports = app;

const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();
app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());
app.use(express.json());// read json body
app.get('/', (req, res) => {
  res.json({
    message: '🌭 🍾 H-Invetory API 🥊 🌊',
  });
});

app.use('/api/v1', api);// all routes that is defined in api will prefixed with /api/v1

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;

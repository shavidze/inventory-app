const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const request = require('supertest');

const middlewares = require('./middlewares');

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
request(app)
  .get('/')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '48')
  .expect(200)
  .end((err, res) => {
    if (err) console.log(err);
  });
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;

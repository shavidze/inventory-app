// eslint-disable-next-line no-unused-expressions
require('dotenv').config;

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      pasword: process.env.POSTGRES_PASSWORD,
    },
  },
};

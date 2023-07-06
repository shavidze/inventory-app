// eslint-disable-next-line no-unused-expressions
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      socketPath: '/var/run/postgresql',
    },
    migrations: {
      directory: './db/migrations',
    },
  },
};

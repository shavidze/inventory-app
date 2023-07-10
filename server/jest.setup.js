const db = require('./src/db');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

afterAll(async () => {
  await db.migrate.rollback(); // rollback the migration after tests are done
  await db.destroy(); // close the database connection
});

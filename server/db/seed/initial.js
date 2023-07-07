const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const orderedTableNames = require('../../src/utils/constants/sortedTableNames');
const tableNames = require('../../src/utils/constants/tableNames');
const countries = require('../../src/utils/constants/countries');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await orderedTableNames.reduce(async (promise, table_name) => {
    await promise;
    return knex(table_name).del();
  }, Promise.resolve());
  const password = uuidv4().replace(/-/g, '');
  const user = {
    email: 'sabashavidze@gmail.com',
    name: 'Saba',
    password: await bcrypt.hash(password, 12),
  };
  const [createdUser] = await knex(tableNames.user).insert(user).returning('*');

  console.log('User created', { password }, createdUser);

  await knex(tableNames.country).insert(countries);
};

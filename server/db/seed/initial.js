const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const orderedTableNames = require('../../src/utils/constants/sortedTableNames');
const tableNames = require('../../src/utils/constants/tableNames');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await Promise.all(orderedTableNames.map((table_name) => knex(table_name).del()));
  const password = uuidv4().replace(/-/g, '');
  const user = {
    email: 'sabashavidze@gmail.com',
    name: 'Saba',
    password: await bcrypt.hash(password, 12),
  };
  const [createdUser] = await knex(tableNames.user).insert(user).returning('*');

  console.log('User created', { password }, createdUser);
};

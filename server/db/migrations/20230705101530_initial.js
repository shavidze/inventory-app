const Knex = require('knex');

const tableNames = require('../../src/utils/constants/tableNames');

/**
 *
 * @param {} table
 * @returns table with created_at, updated_at, deleted_at columns
 */
function addDefaultColumns(table) {
  table.timestamps(false, true);
  table
    .datetime('deleted_at', { precision: 6 });
}

/**
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.user, (table) => {
    table.increments().notNullable();
    table.text('email', 255).notNullable().unique();
    table.string('name').notNullable();
    table.text('password', 64).notNullable();
    table.datetime('last_login');
    addDefaultColumns(table);
  });
};

/**
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTable(tableNames.user);
};

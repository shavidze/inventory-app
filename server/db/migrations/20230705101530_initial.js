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
 * @param { string } table_name
 * @returns {Knex.SchemaBuilder}
*/
function createNameTable(knex, table_name) {
  return knex.schema.createTable(table_name, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    addDefaultColumns(table);
  });
}

function dropTablesToArray(knex) {
  return tableNames.map((tableName) => knex.schema.dropTable(tableName));
}

/**
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable(tableNames.user, (table) => {
      table.increments().notNullable();
      table.text('email', 255).notNullable().unique();
      table.string('name').notNullable();
      table.text('password', 64).notNullable();
      table.datetime('last_login');
      addDefaultColumns(table);
    }),
    createNameTable(knex, tableNames.item_type),
    createNameTable(knex, tableNames.country),
    createNameTable(knex, tableNames.state),
    createNameTable(knex, tableNames.shape),
    knex.schema.createTable(tableNames.location, (table) => {
      table.increments().notNullable();
      table.string('name').notNullable();
      table.string('description', 100);
      table.string('image_url', 2000);
      addDefaultColumns(table);
    }),
  ]);
};

/**
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await Promise.all(
    Object.values(tableNames).map((table_name) => knex.schema.dropTable(table_name)),
  );
};

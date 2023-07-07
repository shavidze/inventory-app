const tableNames = require('../../src/utils/constants/tableNames');
const { addDefaultColumns, references } = require('../../src/utils/db/tableUtils');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.table(tableNames.address, (table) => {
    table.dropColumn('country_id');
  });
  await knex.schema.table(tableNames.state, (table) => {
    table.string('code');
    references(table, tableNames.country);
  });
  await knex.schema.table(tableNames.country, (table) => {
    table.string('code');
  });
  await knex.schema.createTable(tableNames.size, (table) => {
    table.increments();
    table.string('name').notNullable();
    table.float('length');
    table.float('width');
    table.integer('height');
    references(table, tableNames.shape);
    addDefaultColumns(table);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.table(tableNames.address, (table) => {
    references(table, tableNames.country);
  });
  await knex.schema.table(tableNames.state, (table) => {
    table.dropColumn('country_id');
  });
  await knex.schema.dropTable(tableNames.size);
};

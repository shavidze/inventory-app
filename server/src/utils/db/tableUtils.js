// eslint-disable-next-line no-unused-vars
const Knex = require('knex');

/**
 *
 * @param {} table
 * @returns table with created_at, updated_at, deleted_at columns
 */
function addDefaultColumns(table) {
  table.timestamps(false, true);
  table.datetime('deleted_at', { precision: 6 });
}

/**
 * @param { Knex } knex
 * @param { string } table_name
 * @returns {Knex.SchemaBuilder}
 */
function createNameTable(knex, table_name) {
  return knex.schema.createTable(table_name, (table) => {
    table
      .increments()
      .notNullable();
    table
      .string('name')
      .notNullable()
      .unique();
    addDefaultColumns(table);
  });
}

function references(table, tableName) {
  table
    .integer(`${tableName}_id`)
    .unsigned()
    .references('id')
    .inTable(tableName)
    .onDelete('cascade');
}

function url(table, columnName) {
  return table.string(columnName, 2000);
}

function email(table, columnName) {
  return table.string(columnName, 255);
}

module.exports = {
  addDefaultColumns,
  createNameTable,
  references,
  url,
  email,
};

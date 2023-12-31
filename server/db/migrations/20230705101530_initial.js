const Knex = require('knex');

const {
  addDefaultColumns, references, url, email, createNameTable,
} = require('../../src/utils/db/tableUtils');

const tableNames = require('../../src/utils/constants/tableNames');
/**
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable(tableNames.user, (table) => {
      table.increments().notNullable();
      email(table, 'email').notNullable().unique();
      table.string('name').notNullable();
      table.text('password', 64).notNullable();
      table.datetime('last_login');
      addDefaultColumns(table);
    }),
    createNameTable(knex, tableNames.item_type),
    createNameTable(knex, tableNames.country),
    createNameTable(knex, tableNames.state),
    createNameTable(knex, tableNames.shape),
    knex.schema.createTable(tableNames.inventory_location, (table) => {
      table.increments().notNullable();
      table.string('name').notNullable();
      table.string('description', 100);
      table.string('image_url', 2000);
      addDefaultColumns(table);
    }),
  ]);
  await knex.schema.createTable(tableNames.address, (table) => {
    table.increments().notNullable();
    table.string('street_address_1', 50).notNullable();
    table.string('street_address_2', 50);
    table.string('city', 50).notNullable();
    table.string('zipcode', 50).notNullable();
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    references(table, tableNames.state, false);
    references(table, tableNames.country);
  });
  await knex.schema.createTable(tableNames.company, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable();
    url(table, 'logo_url');
    table.string('description', 1000);
    url(table, 'website_url');
    email(table, 'email');
    references(table, tableNames.address);
  });
};

/**
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await Promise.all(
    [
      tableNames.company,
      tableNames.address,
      tableNames.user,
      tableNames.item_type,
      tableNames.country,
      tableNames.state,
      tableNames.shape,
      tableNames.inventory_location,
    ].map((tableName) => knex.schema.dropTableIfExists(tableName)),
  );
};

const tableNames = require('../../src/utils/constants/tableNames');
const { addDefaultColumns, references, url } = require('../../src/utils/db/tableUtils');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
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
    table.float('volume');
    references(table, tableNames.shape);
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.item, (table) => {
    table.increments();
    references(table, tableNames.user);
    table.string('name').notNullable();
    references(table, tableNames.item_type);
    table.text('descriptoin');
    references(table, tableNames.company);
    references(table, tableNames.size);
    table.string('sku', 64);
    table.boolean('sparsk_joy').defaultTo(true);
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.item_info, (table) => {
    table.increments();
    references(table, tableNames.user);
    references(table, tableNames.item);
    table.dateTime('purchase_date').notNullable();
    table.dateTime('expiration_date');
    references(table, tableNames.company, false, 'retailer');
    table.dateTime('last_used');
    table.float('purchase_price').notNullable().defaultTo(0);
    table.float('msrp').notNullable().defaultTo(0);
    references(table, tableNames.inventory_location);
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.item_image, (table) => {
    table.increments();
    references(table, tableNames.item);
    url(table, 'image_url');
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.related_item, (table) => {
    table.increments();
    references(table, tableNames.item);
    references(table, tableNames.item, false, 'related_item');
    addDefaultColumns(table);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.table(tableNames.state, (table) => {
    table.dropColumn('code');
    table.dropColumn('country_id');
  });
  await knex.schema.table(tableNames.country, (table) => {
    table.dropColumn('code');
  });

  await Promise.all(
    [
      tableNames.size,
      tableNames.item,
      tableNames.item_info,
      tableNames.item_image,
      tableNames.related_item,
    ]
      .reverse()
      .map((name) => knex.schema.dropTableIfExists(name)),
  );
};

/* eslint-disable no-tabs */
const tableNames = require('../../src/utils/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.user, (table) => {
    /**
	 * it creates a columnt with an integer data type that
	 * authomatically increments by 1 for each row inserted into the table
	 */
    table.increments().notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};

const db = require('../../db');
const tableNames = require('../../utils/constants/tableNames');

const fields = ['id', 'name', 'code'];
const find = () => db(tableNames.state).select(fields);
const get = async (id) => db(tableNames.state).select(fields).where({ id }).firts();

module.exports = {
  find, get,
};

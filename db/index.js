const lowdb = require('lowdb');
const fileAsync = require('lowdb/adapters/FileAsync');

let db;

const adapter = new fileAsync('database.json');

async function createConnection() {
  db = await lowdb(adapter);
  return db.defaults({ topic: [] }).write();
}

const getConnection = () => db;

module.exports = {
  createConnection,
  getConnection
}

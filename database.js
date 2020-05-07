const knex = require("knex");

const pg = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "123",
    database: "1",
  },
  pool: {
    max: 50,
    min: 2,
    // acquireTimeout: 60 * 1000,
    // createTimeoutMillis: 30000,
    // acquireTimeoutMillis: 30000,
    // idleTimeoutMillis: 30000,
    // reapIntervalMillis: 1000,
    // createRetryIntervalMillis: 100,
    propagateCreateError: false, // <- default is true, set to false
  },
});
module.exports = pg;

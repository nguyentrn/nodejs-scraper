const pg = require("./database");

const insertOne = async (table, res) => {
  try {
    await pg(table).insert(res);
  } catch (err) {
    if (err.routine !== "_bt_check_unique") {
      console.log(err);
    }
  }
};

const updateOne = async (table, id, res) => {
  try {
    await pg(table).update(res).where("id", id);
  } catch (err) {
    if (err.routine !== "_bt_check_unique") {
      console.log(err);
    }
  }
};

const upsertOne = async (table, id, res) => {
  try {
    await pg(table).insert(res);
  } catch (err) {
    if (err.routine !== "_bt_check_unique") {
      console.log(err);
    } else {
      await pg(table).update(res).where("id", id);
    }
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = { insertOne, updateOne, upsertOne, sleep };

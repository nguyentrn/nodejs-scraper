const pg = require("./database");

exports.insertOne = async (table, res) => {
  try {
    await pg(table).insert(res);
  } catch (err) {
    if (err.routine !== "_bt_check_unique") {
      console.log(err);
    }
  }
};

exports.updateOne = async (table, id, res) => {
  try {
    await pg(table)
      .update(res)
      .where("id", id);
  } catch (err) {
    if (err.routine !== "_bt_check_unique") {
      console.log(err);
    }
  }
};

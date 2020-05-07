const pg = require("./database");

(async () => {
  await pg.schema.createTable("fbg_sgu_posts", (table) => {
    table.bigInteger("id");
    table.integer("reactions");
    table.integer("shares");
    table.string("link");
    table.string("message", 65535);
    table.specificType("hashtag", "varchar(255)[]");
    table.string("full_picture");
    table.json("place");
  });
})();

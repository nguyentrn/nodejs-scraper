const axios = require("axios");

const token =
  "EAAAAZAw4FxQIBALeAdE8QUC6MP1cSaATU7a71Enr7vKOaRLZCF9mEiW6XEHGyv3W7qsAsQ9m9ZBwLFV8uAwMgZCjet42FngbxE94W42SZAd8FvTukH01YhNCl1SIf9sqsXAYhNBtRB3xBP0R31ZCN3zFfvkNRj1a9PzBL6993wVwZDZD";
const fields = [
  "reactions.limit(0).summary(total_count)",
  "object_id",
  "full_picture",
  "message",
  "link",
  "place",
  "shares",
  "type",
];
const url = `https://graph.facebook.com/v2.6/1447427935553234/feed?fields=${fields.join(
  ","
)}&access_token=${token}`;

(async () => {
  const res = await axios(url);
  res.data.data.forEach((d) => {
    const post = {};
    post.id = d.object_id;
    post.reactions = d.reactions.summary.total_count;
    post.shares = d.shares.count;
    post.message = d.message;
    post.hashtag = d.message.split("#").map((m) => m.split(" ")[0]);
    post.link = d.id;
    post.full_picture = d.full_picture;
    post.place = d.place;

    post.hashtag.shift();
    console.log(post);
  });
})();

console.log(url);

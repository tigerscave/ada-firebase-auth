export const sendTweetToDB = (data, store, db) => {
  db.collection("tweets")
    .doc()
    .set(data);
};

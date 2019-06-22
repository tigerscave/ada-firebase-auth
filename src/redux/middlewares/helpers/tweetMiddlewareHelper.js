export const sendTweetToDB = (data, store, db) => {
  const queryData = {
    ...data,
    likedUsers: []
  };
  db.collection("tweets")
    .doc()
    .set(queryData);
};

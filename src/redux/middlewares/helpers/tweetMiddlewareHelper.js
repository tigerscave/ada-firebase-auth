import { push } from "connected-react-router";

export const sendTweetToDB = (data, store, db) => {
  db.collection("tweets")
    .doc()
    .set(data)
    .then(() => {
      store.dispatch(push("/twitter"));
    });
};

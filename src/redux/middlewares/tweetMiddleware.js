import * as userTweets from "../reducers/tweet";

import firebase from "firebase/app";
import "firebase/firestore";
import { push } from "connected-react-router";

const tweetMiddleware = store => next => action => {
  next(action);

  const db = firebase.firestore();
  if (action.type === userTweets.CREATE_TWEET) {
    const { tweetText } = action.payload;
    const date = firebase.firestore.Timestamp;

    firebase.auth().onAuthStateChanged(user => {
      db.collection("tweets")
        .doc()
        .set({
          tweetText,
          userId: user.uid,
          createdAt: date.fromDate(new Date())
        })
        .then(() => {
          store.dispatch(push("/twitter"));
        });
    });
  }

  if (action.type === userTweets.MY_TWEET_LISTENER) {
    const user = action.payload;
    const userId = user.uid;
    console.log(userId);
    db.collection("tweets")
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .limit(10)
      .onSnapshot(documentSnapshots => {
        console.log(documentSnapshots);
        console.log(documentSnapshots.docs);
        store.dispatch(userTweets.onSnapshotMyTweet(documentSnapshots.docs));
      });
  }
};

export default tweetMiddleware;

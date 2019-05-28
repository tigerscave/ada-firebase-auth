import * as postTweet from "../reducers/post-tweet";

import firebase from "firebase/app";
import "firebase/firestore";
import { push } from "connected-react-router";

const tweetMiddleware = store => next => action => {
  next(action);

  if (action.type === postTweet.CREATE_TWEET) {
    const { tweetText } = action.payload;
    const date = firebase.firestore.Timestamp;
    const db = firebase.firestore();
    firebase.auth().onAuthStateChanged(user => {
      db.collection("tweets")
        .doc()
        .set({
          tweetText,
          // image: imageUrl,
          userId: user.uid,
          createdAt: date.fromDate(new Date())
        })
        .then(() => {
          store.dispatch(push("/twitter"));
        });
    });
  }
};

export default tweetMiddleware;

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
          store.dispatch(userTweets.displayTweets);
          store.dispatch(push("/my-tweet"));
        });
    });
  }

  if (action.type === userTweets.DISPLAY_TWEETS) {
    firebase.auth().onAuthStateChanged(user => {
      db.collection("tweets")
        .where("userId", "==", user.uid)
        .orderBy("createdAt", "desc")
        .limit(1)
        .get()
        .then(querySnapshot => {
          store.dispatch(
            userTweets.fetchLatestTweetSuccess(querySnapshot.docs)
          );
          console.log("this is docs: ", querySnapshot.docs);
        })
        .catch(err => {
          store.dispatch(userTweets.fetchLatestTweetFailed());
          alert("Error: " + err.message);
        });
    });
  }
};

export default tweetMiddleware;

import * as userTweets from "../reducers/tweet";

import firebase from "firebase/app";
import "firebase/firestore";
// import { push } from "connected-react-router";
import { sendTweetToDB } from "./helpers/tweetMiddlewareHelper";

const tweetMiddleware = store => next => action => {
  next(action);

  const db = firebase.firestore();

  if (action.type === userTweets.CREATE_TWEET) {
    const { tweetText, image } = action.payload;
    const date = firebase.firestore.Timestamp;
    const storageRef = firebase.storage().ref();
    const userId = store.getState().user.userCredential.uid;
    if (image) {
      const imagesRef = storageRef.child(`images/${image.name}`);
      imagesRef.put(image).then(snapshot => {
        snapshot.ref.getDownloadURL().then(imageUrl => {
          const createdAt = date.fromDate(new Date());
          const data = { content: tweetText, imageUrl, userId, createdAt };
          sendTweetToDB(data, store, db);
        });
      });
    } else {
      const createdAt = date.fromDate(new Date());
      const data = { content: tweetText, imageUrl: "", userId, createdAt };
      sendTweetToDB(data, store, db);
    }
  }

  if (action.type === userTweets.MY_TWEET_LISTENER) {
    const user = action.payload;
    const userId = user.uid;
    db.collection("tweets")
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .limit(10)
      .onSnapshot(documentSnapshots => {
        store.dispatch(userTweets.onSnapshotMyTweet(documentSnapshots.docs));
      });
  }

  if (action.type === userTweets.DISPLAY_LATEST_TWEET) {
    const userId = store.getState().user.userCredential.uid;
    db.collection("tweets")
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .limit(1)
      .get()
      .then(documentSnapshots => {
        documentSnapshots.forEach(doc => {
          const data = doc.data();
          store.dispatch(userTweets.displayLatestTweets(data));
        });
      });
  }
};

export default tweetMiddleware;

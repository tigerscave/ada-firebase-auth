import * as userTweets from "../reducers/tweet";

import firebase from "firebase/app";
import "firebase/firestore";
import { sendTweetToDB } from "./helpers/tweetMiddlewareHelper";

const tweetMiddleware = store => next => action => {
  next(action);

  const db = firebase.firestore();

  if (action.type === userTweets.CREATE_TWEET) {
    const { tweetText, image, tag } = action.payload;
    const date = firebase.firestore.Timestamp;
    const storageRef = firebase.storage().ref();
    const userId = store.getState().user.userCredential.uid;
    if (image) {
      const imagesRef = storageRef.child(`images/${image.name}`);
      imagesRef.put(image).then(snapshot => {
        snapshot.ref.getDownloadURL().then(imageUrl => {
          const createdAt = date.fromDate(new Date());
          const data = { content: tweetText, imageUrl, userId, createdAt, tag };
          sendTweetToDB(data, store, db);
        });
      });
    } else {
      const createdAt = date.fromDate(new Date());
      const data = { content: tweetText, imageUrl: "", userId, createdAt, tag };
      sendTweetToDB(data, store, db);
    }
  }

  if (action.type === userTweets.MY_TWEET_LISTENER) {
    const user = action.payload;
    const userId = user.uid;
    db.collection(`users/${userId}/feed`)
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

  if (action.type === userTweets.DELETE_MY_TWEET) {
    const tweetId = action.payload;
    db.collection("tweets")
      .doc(tweetId)
      .delete()
      .then(() => {
        alert("Tweet was deleted");
      });
  }

  if (action.type === userTweets.EDIT_MY_TWEET) {
    const { tweetId, content, image } = action.payload;
    const date = firebase.firestore.Timestamp;
    const storageRef = firebase.storage().ref();
    if (image) {
      const imagesRef = storageRef.child(`images/${image.name}`);
      imagesRef.put(image).then(snapshot => {
        snapshot.ref.getDownloadURL().then(imageUrl => {
          const createdAt = date.fromDate(new Date());
          db.collection("tweets")
            .doc(tweetId)
            .update({ content, createdAt, imageUrl })
            .then(() => {
              alert("Tweet edited ...");
            });
        });
      });
    }
  }

  if (action.type === userTweets.SEARCH_TWEET_TAG) {
    const searchText = action.payload;
    db.collection("tweets")
      .orderBy("tag")
      .orderBy("createdAt", "desc")
      .startAt(searchText)
      .endAt(searchText + "\uf8ff")
      .onSnapshot(snapshot => {
        store.dispatch(userTweets.searchTweetTagSucceed(snapshot.docs));
      });
  }
};

export default tweetMiddleware;

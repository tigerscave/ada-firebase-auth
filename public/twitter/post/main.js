'use strict';

let db = null;

const postTweet = (content) => {
  const user = firebase.auth().currentUser;
  const date = firebase.firestore.Timestamp;
  db.collection('tweets').doc().set({
    content,
    userId: user.uid,
    createdAt: date.now()
  }).then(() => {
    alert("success to add tweet");
    window.location.href = "../"
  }).catch(() => {
    alert("error");
  });
}

const onPostButtonClicked = () => {
  const tweetInput = document.getElementById('tweetInput');
  const date = firebase.firestore.Timestamp;
  console.log(date.now())
  if(tweetInput.value.length) {
    postTweet(tweetInput.value);
  } else {
    alert("empty post not available");
  }
}

const main = () => {
  db = firebase.firestore();
  const postButton = document.getElementById('postButton');
  postButton.addEventListener('click', onPostButtonClicked);
}

window.addEventListener('DOMContentLoaded', main);
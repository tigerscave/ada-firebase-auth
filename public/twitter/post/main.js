'use strict';

let db = null;

const postTweet = (content) => {
  const user = firebase.auth().currentUser;
  db.collection('tweets').doc().set({
    content,
    userId: user.uid,
    createdAt: Date.now()
  }).then(() => {
    alert("success to update biography");
    window.location.href = "../user-detail"
  }).catch(() => {
    alert("error");
  });
}

const onPostButtonClicked = () => {
  const tweetInput = document.getElementById('tweetInput');
  console.log(Date.now())
  if(tweetInput.value.length) {
    //postTweet(tweetInput.value);
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
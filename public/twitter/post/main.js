'use strict';

let db = null;
let file = null;

const createTweet = (content, user, date, imgURL) => {
  db.collection('tweets').doc().set({
    content,
    userId: user.uid,
    imgURL,
    createdAt: date.now()
  }).then(() => {
    alert("success to add tweet");
    window.location.href = "../"
  }).catch(() => {
    alert("error");
  });
}

const tweetWithImage = (content, user, date, imageFile) => {
  const storageRef = firebase.storage().ref().child(`images/${file.name}`);
    storageRef.put(file)
    .then((snapshot) => {
      snapshot.ref.getDownloadURL()
      .then((downloadURL) => {
        createTweet(content, user, date, downloadURL)
      })
    })
    .catch(() => {
      alert("error to upload file")
    })
}

const postTweet = (content) => {
  const user = firebase.auth().currentUser;
  const date = firebase.firestore.Timestamp;
  if(file) {
    tweetWithImage(content, user, date, file);
  } else {
    createTweet(content, user, date, "");
  }
}

const onPostButtonClicked = () => {
  const tweetInput = document.getElementById('tweetInput');
  const date = firebase.firestore.Timestamp;
  if(tweetInput.value.length) {
    postTweet(tweetInput.value);
  } else {
    alert("empty post not available");
  }
}

const onFileChange = e => {
  file = e.target.files[0];
  const url = window.URL.createObjectURL(file)
  document.getElementById('photoPreview').src = url;
}

const main = () => {
  db = firebase.firestore();

  const fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', onFileChange);

  const postButton = document.getElementById('postButton');
  postButton.addEventListener('click', onPostButtonClicked);
}

window.addEventListener('DOMContentLoaded', main);
'use strict';

let db = null;

const displayLatestTweet = data => {
  const latestListEl = document.getElementById("latestTweet");
  while (latestListEl.firstChild) {
    latestListEl.removeChild(latestListEl.firstChild);
  }
  const listNode = document.createElement("LI");
  const textNode = document.createTextNode(data.content);
  listNode.appendChild(textNode);

  const imgListNode = document.createElement("LI");
  const imgNode = document.createElement("IMG");
  imgNode.src = "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg";
  imgListNode.appendChild(imgNode);

  latestListEl.appendChild(listNode);
  latestListEl.appendChild(imgListNode);
}

const fetchLatestPost = () => {
  const userId = firebase.auth().currentUser.uid;
  db.collection("tweets").where("userId", "==", userId).limit(1)
  .get()
  .then((querySnapshot) => {
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(doc.data())
      displayLatestTweet(doc.data())
    })
  })
  .catch(err => {
    alert("error to fetch data");
    console.log(err);
  })
}

const main = () => {
  db = firebase.firestore();
  const latestPostButton = document.getElementById('latestPostButton');
  latestPostButton.addEventListener('click', fetchLatestPost);
}

window.addEventListener('DOMContentLoaded', main);
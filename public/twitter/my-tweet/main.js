'use strict';

let db = null;
let firstVisible = null;
let lastVisible = null;
const OFFSET = 3;

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
  imgNode.src = data.imgURL;
  imgNode.width = "200";
  imgListNode.appendChild(imgNode);

  latestListEl.appendChild(listNode);
  latestListEl.appendChild(imgListNode);
};

const fetchLatestPost = () => {
  const userId = firebase.auth().currentUser.uid;
  db.collection("tweets")
  .where("userId", "==", userId)
  .orderBy("createdAt", "desc")
  .limit(1)
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
};

const displayTweets = docs => {
  const tweetsList = document.getElementById("tweets");
  while (tweetsList.firstChild) {
    tweetsList.removeChild(tweetsList.firstChild);
  }
  docs.forEach(d => {
    console.log("data: ", d)
    console.log("d.createdAt: ", d.data().createdAt.toDate())
    const tweet = d.data();
    const listNode = document.createElement("LI");
    const textNode = document.createTextNode(tweet.content);
    listNode.appendChild(textNode);

    const imgListNode = document.createElement("LI");
    const imgNode = document.createElement("IMG");
    imgNode.src = tweet.imgURL ? tweet.imgURL : "";
    imgNode.width = "200";
    imgListNode.appendChild(imgNode);

    const createTimeListNode = document.createElement("LI");
    const date = d.data().createdAt.toDate();
    const formattedDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + String(date.getMinutes()).padStart(2, '0');
    const timeTextNode = document.createTextNode(`createdAt: ${formattedDate}`);
    createTimeListNode.appendChild(timeTextNode);

    tweetsList.appendChild(listNode);
    tweetsList.appendChild(imgListNode);
    tweetsList.appendChild(createTimeListNode);
  })
}

const myTweetListener = (user) => {
  const userId = user.uid;
  console.log(userId)
  db.collection("tweets")
  .where("userId", "==", userId)
  .orderBy("createdAt", "desc")
  .limit(OFFSET)
  .onSnapshot((documentSnapshots) => {
    console.log(documentSnapshots)
    console.log(documentSnapshots.docs)
    lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
    displayTweets(documentSnapshots.docs)
  })
}

const checkUserAuth = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      window.location.replace("../login");
    } else {
      myTweetListener(user);
    }
  });
};

const paginate = (isForward) => {
  const userId = firebase.auth().currentUser.uid;
  if (isForward) {
    db.collection("tweets")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .startAfter(lastVisible)
    .limit(OFFSET)
    .get()
    .then((documentSnapshots) => {
      console.log(documentSnapshots)
      console.log(documentSnapshots.docs)
      firstVisible = documentSnapshots.docs[0];
      lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
      displayTweets(documentSnapshots.docs)
    })
  } else {
    console.log(firstVisible)
    db.collection("tweets")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .endBefore(lastVisible)
    .limit(OFFSET)
    .get()
    .then((documentSnapshots) => {
      console.log(documentSnapshots)
      console.log(documentSnapshots.docs)
      firstVisible = documentSnapshots.docs[0];
      lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
      displayTweets(documentSnapshots.docs)
    })
  }
}

const main = () => {
  checkUserAuth();
  db = firebase.firestore();

  const latestPostButton = document.getElementById('latestPostButton');
  latestPostButton.addEventListener('click', fetchLatestPost);

  const nextButton = document.getElementById('next');
  nextButton.addEventListener('click', () => paginate(true));

  const backButton = document.getElementById('back');
  backButton.addEventListener('click', () => paginate(false));
};

window.addEventListener('DOMContentLoaded', main);
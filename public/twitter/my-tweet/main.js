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
    const tweet = d.data();
    const listNode = document.createElement("LI");
    const textNode = document.createTextNode(tweet.content);
    listNode.appendChild(textNode);

    const imgListNode = document.createElement("LI");
    const imgNode = document.createElement("IMG");
    imgNode.src = tweet.imgURL ? tweet.imgURL : "";
    imgNode.width = "200";
    imgListNode.appendChild(imgNode);

    tweetsList.appendChild(listNode);
    tweetsList.appendChild(imgListNode);
  })
}

const myTweetListener = (user) => {
  const userId = user.uid;
  console.log(userId)
  db.collection("tweets")
  .where("userId", "==", userId)
  .orderBy("createdAt", "desc")
  .onSnapshot((doc) => {
    console.log(doc)
    console.log(doc.docs)
    displayTweets(doc.docs)
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

const main = () => {
  checkUserAuth();
  db = firebase.firestore();

  const latestPostButton = document.getElementById('latestPostButton');
  latestPostButton.addEventListener('click', fetchLatestPost);
};

window.addEventListener('DOMContentLoaded', main);
'use strict';

let db = null;

const checkUserAuth = () => {
  firebase.auth().onAuthStateChanged((user) => {
    document.getElementById('userName').innerHTML = user.displayName;
    if (user) {
      db.collection('users').doc(user.uid).get().then(doc => {
        console.log(doc.data());
        const { biography } = doc.data();
        document.getElementById('biography').innerHTML = biography;
      });
    } else {
      window.location.replace("../login");
    }
  });  
};

const main = () => {
  db = firebase.firestore();
  checkUserAuth();
  const editButton = document.getElementById('editButton');
  editButton.addEventListener('click', () => {
    window.location.href = "../edit-detail";
  });
}

window.addEventListener('DOMContentLoaded', main);
'use strict';

let db = null;

const checkUserAuth = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      db.collection('users')
      .doc(user.uid)
      .get()
      .then(doc => {
        console.log(doc.data());
        const { biography, birthDay } = doc.data();
        console.log(birthDay.toDate())
        const formattedDate = dayjs(birthDay.toDate()).format('YYYY-MM-DD')
        document.getElementById('birthDay').value = formattedDate;
        document.getElementById('biography').value = biography;
      });
    } else {
      window.location.replace("../login");
    }
  });  
};

const updateBio = () => {
  const date = firebase.firestore.Timestamp;
  const bioInput = document.getElementById('biography');
  const birthDayDate = new Date(document.getElementById('birthDay').value);
  const birthDayTimeStamp = firebase.firestore.Timestamp.fromDate(birthDayDate);
  if(bioInput.value.length) {
    const user = firebase.auth().currentUser;
    db.collection('users').doc(user.uid).set({
      biography: bioInput.value,
      birthDay: birthDayTimeStamp
    }).then(() => {
      alert("success to update biography");
      window.location.href = "../user-detail"
    }).catch(() => {
      alert("error");
    });
  } else {
    alert("can not be blank !")
  }
}

const main = () => {
  db = firebase.firestore();
  checkUserAuth();
  const updateButton = document.getElementById('updateButton');
  updateButton.addEventListener('click', updateBio)
}

window.addEventListener('DOMContentLoaded', main);
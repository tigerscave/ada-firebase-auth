'use strict';

const displayUserInfo = user => {
  console.log(user);
  const { email } = user;
  document.getElementById('currentEmail').innerHTML = email;
}

const checkUserAuth = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      window.location.replace("../login");
    } else {
      displayUserInfo(user);
    }
  });
};

const updateButtonClicked = () => {
  const user = firebase.auth().currentUser;
  const newEmail = document.getElementById('newEmail').value;
  console.log(newEmail)
  user.updateEmail(newEmail)
  .then(() => {
    alert("User email updated!")
    window.location.replace("../my-account");
  })
  .catch(() => {
    firebase.auth().signOut()
    .then((res) => {
      alert("user logged out");
      window.location.replace("../login");
      console.log(res);
    })
    .catch((err) => {
      alert("Failed to logout !")
      console.log(err);
    })
  })
}

const main = () => {
  checkUserAuth();  

  const updateButton = document.getElementById('updateButton');
  updateButton.addEventListener('click', updateButtonClicked);
};

window.addEventListener('DOMContentLoaded', main);
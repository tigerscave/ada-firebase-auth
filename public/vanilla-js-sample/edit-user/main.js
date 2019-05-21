'use strict';

const displayUserInfo = user => {
  console.log(user);
  const { displayName, photoURL } = user;
  document.getElementById('displayName').value = displayName;
  document.getElementById('photoURL').value = photoURL;
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
  const displayName = document.getElementById('displayName').value;
  const photoURL = document.getElementById('photoURL').value;
  user.updateProfile({
    displayName,
    photoURL
  }).then(() => {
    alert("User profile updated!")
    window.location.replace("../my-account");
  })
}

const main = () => {
  checkUserAuth();
  const updateButton = document.getElementById('updateButton');
  updateButton.addEventListener('click', updateButtonClicked);
};

window.addEventListener('DOMContentLoaded', main);
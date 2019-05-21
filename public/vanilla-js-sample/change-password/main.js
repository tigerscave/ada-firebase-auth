'use strict';

const checkUserAuth = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      window.location.replace("../login");
    }
  });
};

const logout = () => {
  firebase.auth().signOut()
  .then(() => {
    window.location.replace("../login");
  })
  .catch((err) => {
    alert("Failed to logout !")
    console.log(err);
  })
}

const updateButtonClicked = () => {
  const user = firebase.auth().currentUser;
  const newPassword = document.getElementById('newPassword').value;
  user.updatePassword(newPassword)
  .then(() => {
    alert("User password updated!")
    logout();
  })
  .catch((err) => {
    alert("error occurs.");
    console.log(err)
  })
}

const main = () => {
  checkUserAuth();  

  const updateButton = document.getElementById('updateButton');
  updateButton.addEventListener('click', updateButtonClicked);
};

window.addEventListener('DOMContentLoaded', main);
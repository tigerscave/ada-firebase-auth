'use strict';

const checkUserAuth = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("User is signed in.");
      console.log(user)
      window.location.replace("../my-account");
    } else {
      console.log("No user is signed in.");
    }
  });
}

const main = () => {
  checkUserAuth();
  const emailInput = document.getElementById('email');
  const resetPasswordButton = document.getElementById('resetPassword');

  const onButtonClicked = () => {
    const email = emailInput.value;
    firebase.auth().sendPasswordResetEmail(email)
    .then((res) => {
      alert("email sent!");
      console.log(res);
      window.location.replace("../login");
    })
    .catch((err) => {
      alert("Failed to send email !")
      console.log(err);
    })
  }

  resetPasswordButton.addEventListener('click', onButtonClicked);
}

window.addEventListener('DOMContentLoaded', main);
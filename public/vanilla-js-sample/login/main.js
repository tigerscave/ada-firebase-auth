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
  const passwordInput = document.getElementById('password');
  const loginButton = document.getElementById('loginButton');

  const onButtonClicked = () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res) => {
      alert("login success!");
      console.log(res);
    })
    .catch((err) => {
      alert("Failed to login !")
      console.log(err);
    })
  }

  loginButton.addEventListener('click', onButtonClicked);
}

window.addEventListener('DOMContentLoaded', main);
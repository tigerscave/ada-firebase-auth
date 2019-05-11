'use strict';

const main = () => {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const button = document.getElementById('button');

  const onButtonClicked = () => {
    console.log(firebase)
    const email = emailInput.value;
    const password = passwordInput.value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
      alert("success to create user!");
      window.location.replace("../login");
      console.log(res);
    })
    .catch((err) => {
      alert("Failed to sign up !")
      console.log(err);
    })
  }

  button.addEventListener('click', onButtonClicked);
}

window.addEventListener('DOMContentLoaded', main);
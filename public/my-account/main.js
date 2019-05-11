'use strict';

const displayUserInfo = user => {
  console.log(user);
  document.getElementById('email').innerHTML = user.email;
}

const checkUserAuth = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      window.location.replace("../login");
    } else {
      displayUserInfo(user);
    }
  });
};

const main = () => {
  checkUserAuth();
  const logoutButton = document.getElementById('logoutButton');

  const onButtonClicked = () => {
    firebase.auth().signOut()
    .then((res) => {
      alert("logout success!");
      window.location.replace("../login");
      console.log(res);
    })
    .catch((err) => {
      alert("Failed to logout !")
      console.log(err);
    })
  }

  logoutButton.addEventListener('click', onButtonClicked);
};

window.addEventListener('DOMContentLoaded', main);
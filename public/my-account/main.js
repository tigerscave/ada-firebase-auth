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

const onLogoutButtonClicked = () => {
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
};

const onDeleteButtonClicked = () => {
  const user = firebase.auth().currentUser;
  user.delete().then(() => {
    alert("user delete success !");
    window.location.replace("../login");
  }).catch(function(error) {
    alert("Failed to delete user !")
  });
}

const main = () => {
  checkUserAuth();
  const logoutButton = document.getElementById('logoutButton');
  const deleteButton = document.getElementById('deleteButton');

  logoutButton.addEventListener('click', onLogoutButtonClicked);
  deleteButton.addEventListener('click', onDeleteButtonClicked);
};

window.addEventListener('DOMContentLoaded', main);
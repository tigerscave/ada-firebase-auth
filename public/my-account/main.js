'use strict';

const displayUserInfo = user => {
  console.log(user);
  const { email, displayName, photoURL } = user;
  document.getElementById('email').innerHTML = email;
  document.getElementById('displayName').innerHTML = displayName;

  const photoEl = document.getElementById('myPhoto');
  if(photoURL) {
    photoEl.src = photoURL;
  } else {
    photoEl.src = "http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png";
  }
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
  const editButton = document.getElementById('editButton');
  const changeEmailButton = document.getElementById('changeEmail');
  const changePasswordButton = document.getElementById('changePassword');

  logoutButton.addEventListener('click', onLogoutButtonClicked);
  deleteButton.addEventListener('click', onDeleteButtonClicked);

  editButton.addEventListener('click', () => {
    window.location.href = "../edit-user";
  });

  changeEmailButton.addEventListener('click', () => {
    window.location.href = "../change-email";
  })

  changePasswordButton.addEventListener('click', () => {
    window.location.href = "../change-password";
  })
};

window.addEventListener('DOMContentLoaded', main);
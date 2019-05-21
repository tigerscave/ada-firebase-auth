'use strict';

let file = null;

const displayUserInfo = user => {
  const { photoURL } = user;

  const photoEl = document.getElementById('currentPhoto');
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

const onFileChange = e => {
  file = e.target.files[0];
  console.log("file: ", file)
  const blobUrl = window.URL.createObjectURL(file)
  console.log("brobUrl: ", blobUrl)
  document.getElementById('photoPreview').src = blobUrl;
}

const updatePhotoUrl = (photoURL) => {
  const user = firebase.auth().currentUser;
  user.updateProfile({
    photoURL
  }).then(() => {
    alert("User profile updated!")
    window.location.replace("../my-account");
  })
}

const onUploadButtonClicked = () => {
  const storageRef = firebase.storage().ref().child(`images/${file.name}`);
  console.log(storageRef)
  if(file) {
    storageRef.put(file)
    .then((snapshot) => {
      console.log(snapshot)
      snapshot.ref.getDownloadURL()
      .then((downloadURL) => {
        console.log(downloadURL)
        updatePhotoUrl(downloadURL)
      })
    })
    .catch(() => {
      alert("error to upload file")
    })
  } else {
    alert("no file chosen !")
  }

}

const main = () => {
  checkUserAuth();

  const fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', onFileChange);

  const uploadButton = document.getElementById('uploadButton');
  uploadButton.addEventListener('click', onUploadButtonClicked)
}

window.addEventListener('DOMContentLoaded', main);
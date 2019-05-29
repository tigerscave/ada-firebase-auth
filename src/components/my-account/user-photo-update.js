import React from "react";
import firebase from "firebase/app";

class UserPhotoUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoURL: "",
      previewPhotoSrc: ""
    };

    this.displayUserPhoto = user => {
      this.setState({
        photoURL: user.photoURL ? user.photoURL : ""
      });
    };

    this.onFileChange = e => {
      const file = e.target.files[0];
      this.setState({
        previewPhotoSrc: window.URL.createObjectURL(file)
      });
    };
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.displayUserPhoto(user);
      } else {
        alert("no user");
      }
    });
  };

  render() {
    const { photoURL, previewPhotoSrc } = this.state;
    return (
      <div>
        <h3>User Photo Update</h3>
        <button onClick={this.displayUserPhoto}>hoge</button>
        <div>
          <p>Current Photo</p>
          <img width="200" id="currentPhoto" src={photoURL} />
        </div>
        <div>
          <p>New Photo Preview</p>
          <input id="fileInput" type="file" onChange={this.onFileChange} />
          <div>
            <img width="200" src={previewPhotoSrc} />
          </div>
        </div>
      </div>
    );
  }
}

export default UserPhotoUpdate;

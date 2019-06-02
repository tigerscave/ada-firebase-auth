import React from "react";
import firebase from "firebase/app";
import { connect } from "react-redux";
import { updateUserProfile } from "../../redux/reducers/user";

class UpdateUserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      browsPhoto: "",
      image: "",
      userPhotoUrl: ""
    };

    this.onBrowsPhoto = e => {
      this.setState({
        browsPhoto: window.URL.createObjectURL(e.target.files[0]),
        image: e.target.files[0]
      });
    };

    this.onDisplayUserProfile = user => {
      this.setState({
        userPhotoUrl: user.photoURL ? user.photoURL : ""
      });
    };
  }

  componentDidMount() {
    const user = firebase.auth().currentUser;

    if (user) {
      this.onDisplayUserProfile(user);
    }
  }

  render() {
    const { browsPhoto, userPhotoUrl, image } = this.state;
    const { onUploadUserProfile } = this.props;
    return (
      <div>
        <div>
          <img width="250" src={userPhotoUrl} />
        </div>
        <p>Your Selected Photo</p>
        <img width="300" src={browsPhoto} />
        <div>
          <input type="file" onChange={this.onBrowsPhoto} />
        </div>
        <div>
          <button onClick={() => onUploadUserProfile({ image })}>
            Upload User Photo
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUploadUserProfile: image => dispatch(updateUserProfile(image))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UpdateUserProfile);

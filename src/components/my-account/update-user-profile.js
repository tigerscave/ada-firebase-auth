import React from "react";
import firebase from "firebase/app";
import { connect } from "react-redux";
import { updateUserProfile } from "../../redux/reducers/user";
import PropTypes from "prop-types";

class UpdateUserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: "",
      image: "",
      userPhotoUrl: ""
    };

    this.onChangePhoto = e => {
      this.setState({
        selectedPhoto: window.URL.createObjectURL(e.target.files[0]),
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
    const { selectedPhoto, userPhotoUrl, image } = this.state;
    const { uploadUserProfile } = this.props;
    return (
      <div>
        <div>
          <img width="250" src={userPhotoUrl} />
        </div>
        <p>Your Selected Photo</p>
        <img width="300" src={selectedPhoto} />
        <div>
          <input type="file" onChange={this.onChangePhoto} />
        </div>
        <div>
          <button onClick={() => uploadUserProfile({ image })}>
            Upload User Photo
          </button>
        </div>
      </div>
    );
  }
}

UpdateUserProfile.propTypes = {
  uploadUserProfile: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    uploadUserProfile: image => dispatch(updateUserProfile(image))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UpdateUserProfile);

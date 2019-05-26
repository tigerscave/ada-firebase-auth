import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editProfile } from "../../redux/reducers/user";

const EditProfile = props => {
  const { onUpdateProfile } = props;
  const [displayName, onChangeName] = useState("");
  const [photoURL, onChangePhoto] = useState("");
  const [isToggleModal, onToggleModal] = useState(false);
  return (
    <div>
      <h4>Edit Your Profile</h4>
      <button onClick={() => onToggleModal(true)}>Edit User profile</button>
      {isToggleModal && (
        <div className="container">
          <button onClick={() => onToggleModal(false)}>Close</button>
          <div>
            <input
              placeholder="Name"
              onChange={e => onChangeName(e.target.value)}
            />
            <input
              placeholder="PhotoURL"
              onChange={e => onChangePhoto(e.target.value)}
            />
            {/*<button id="uploadPhoto">Upload Photo</button>*/}
          </div>
          <div>
            <button
              id="save"
              onClick={() => onUpdateProfile({ displayName, photoURL })}
            >
              Save
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
        .container {
          position: absolute;
          top: 20rem;
          left: 10rem;
          width: 10rem;
          height: 10rem;
          background: gray;
        }
      `}</style>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateProfile: cred => dispatch(editProfile(cred))
  };
};

EditProfile.propTypes = {
  onUpdateProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(EditProfile);

import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editUserDetail } from "../redux/reducers/usersDetail";

const EditUserDetail = props => {
  const [userName, onUserNameChanged] = useState("");
  const [familyName, onFamilyNameChanged] = useState("");
  const [birthDay, onBirthDayChanged] = useState("");
  const [biography, onBiographyChanged] = useState("");

  const { onSubmitButtonClicked } = props;
  return (
    <div>
      <h1>User detail</h1>
      <ul>
        <li>
          <input
            placeholder="User Name"
            onChange={e => onUserNameChanged(e.target.value)}
            value={userName}
          />
        </li>
        <li>
          <input
            placeholder="Family Name"
            onChange={e => onFamilyNameChanged(e.target.value)}
            value={familyName}
          />
        </li>
        <li>
          <input
            placeholder="Birth Day"
            onChange={e => onBirthDayChanged(e.target.value)}
            value={birthDay}
            type="date"
          />
        </li>
        <li>
          <textarea
            placeholder="biography"
            onChange={e => onBiographyChanged(e.target.value)}
            value={biography}
          />
        </li>
      </ul>
      <button
        onClick={() =>
          onSubmitButtonClicked({ userName, familyName, birthDay, biography })
        }
      >
        Submit
      </button>
    </div>
  );
};

EditUserDetail.propTypes = {
  onSubmitButtonClicked: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitButtonClicked: cred => dispatch(editUserDetail(cred))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditUserDetail);

import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createUser } from "../redux/reducers/user";

const EditUserDetail = props => {
  const [email, onEmailChanged] = useState("");
  const [password, onPasswordChanged] = useState("");
  const { onSignUpButtonClicked } = props;
  return (
    <div>
      <h1>User detail</h1>
      <input
        placeholder="email"
        onChange={e => onEmailChanged(e.target.value)}
        value={email}
      />
      <input
        placeholder="password"
        onChange={e => onPasswordChanged(e.target.value)}
        value={password}
      />

      <button onClick={() => onSignUpButtonClicked({ email, password })}>
        Sign up
      </button>
    </div>
  );
};

EditUserDetail.propTypes = {
  onSignUpButtonClicked: PropTypes.func.isRequired
};

export default EditUserDetail;

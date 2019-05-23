import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createUser } from "../redux/reducers/user";

const SignUpPage = props => {
  const [email, onEmailChanged] = useState("");
  const [password, onPasswordChanged] = useState("");
  const { onSignUpButtonClicked } = props;
  return (
    <div>
      <h1>Sign Up</h1>
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

SignUpPage.propTypes = {
  onSignUpButtonClicked: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onSignUpButtonClicked: cred => dispatch(createUser(cred))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignUpPage);

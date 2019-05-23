import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createUser } from "../redux/reducers/user";

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.onEmailChanged = e => {
      this.setState({
        email: e.target.value
      });
    };

    this.onPasswordChanged = e => {
      this.setState({
        password: e.target.value
      });
    };
  }

  render() {
    const { email, password } = this.state;
    const { onSignUpButtonClicked } = this.props;
    return (
      <div>
        <h1>Sign Up</h1>
        <input
          placeholder="email"
          onChange={this.onEmailChanged}
          value={email}
        />
        <input
          placeholder="password"
          onChange={this.onPasswordChanged}
          value={password}
        />

        <button onClick={() => onSignUpButtonClicked({ email, password })}>
          Sign up
        </button>
      </div>
    );
  }
}

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

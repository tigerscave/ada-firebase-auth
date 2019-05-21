import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLogin } from "../redux/reducers/login";

class LoginPage extends React.Component {
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
    const { onLoginButtonClicked, isLoading } = this.props;
    return (
      <div>
        {isLoading ? <h1>... Loading ...</h1> : <h1>Login</h1>}
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
        <button onClick={() => onLoginButtonClicked({ email, password })}>
          LOGIN
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isLoading } = state.login;
  return {
    isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginButtonClicked: cred => dispatch(userLogin(cred))
  };
};

LoginPage.propTypes = {
  onLoginButtonClicked: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

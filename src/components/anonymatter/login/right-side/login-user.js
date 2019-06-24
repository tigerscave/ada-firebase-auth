import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLogin, checkUserAuth } from "../../../../redux/reducers/login";
import { backgroundBlue, accent, darkGray } from "../../../../styles/color";

class LoginUser extends React.Component {
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

  componentDidMount = () => {
    const { checkUserAuth } = this.props;
    checkUserAuth();
  };

  render() {
    const { email, password } = this.state;
    const { onLoginButtonClicked, isLoading } = this.props;
    return (
      <div>
        {isLoading && <h1>... Loading ...</h1>}
        <div className="containers">
          <div className="email-container">
            <p className="email">Email</p>
            <input
              placeholder="xxx@example.com"
              onChange={this.onEmailChanged}
              value={email}
            />
          </div>
          <div className="password-container">
            <p className="password">Password</p>
            <input
              onChange={this.onPasswordChanged}
              value={password}
            />
            <p className="forget-password">Forgot password?</p>
          </div>
          <input className="login"
            value="LOGIN"
            type="submit"
            onClick={() => onLoginButtonClicked({ email, password })}
          />
        </div>
        <style jsx>{`
          div.containers {
            display: flex;
            padding: 2em 2em;
            justify-content: space-around;
          }
          p.email {
            color: ${accent};
            font-weight: bold;
          }
          input {
            padding-left: 80px;
            padding-right: 80px;
            border: .5px solid ${accent};
            background: #F1F8FE;
            border-radius: 5px;
            padding-top: 18px;
            padding-bottom: 18px;
          }
          .email-container {
          }
          .password-container {

          }
          .password {
            color: ${accent};
            font-weight: bold;
          }
          input.login {
            border: 2px solid ${accent};
            margin: 3rem 0;
            font-weight: bold;
            color: ${accent};
          }

          .forget-password {
            color: #A9A9A9;
            margin-top: 5px;
            font-weight: bold;
          }
          ::placeholder {
            color: ${accent};
          }
        `}</style>
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
    onLoginButtonClicked: cred => dispatch(userLogin(cred)),
    checkUserAuth: () => dispatch(checkUserAuth())
  };
};

LoginUser.propTypes = {
  onLoginButtonClicked: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  checkUserAuth: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginUser);

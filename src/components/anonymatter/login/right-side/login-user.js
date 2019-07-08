import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLogin, checkUserAuth } from "../../../../redux/reducers/login";
import { accent } from "../../../../styles/color";

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
        <div className="content">
          <div className="email-box">
            <p className="email">Email</p>
            <input
              placeholder="xxx@example.com"
              onChange={this.onEmailChanged}
              value={email}
            />
          </div>
          <div className="password-box">
            <p className="password">Password</p>
            <input onChange={this.onPasswordChanged} value={password} />
            <p className="forget-password">Forgot password?</p>
          </div>
          <input
            className="login"
            value="LOGIN"
            type="submit"
            onClick={() => onLoginButtonClicked({ email, password })}
          />
        </div>
        <style jsx>{`
          .content {
            display: flex;
          }
          .email-box {
            width: 35%;
            margin-right: 50px;
          }
          .email-box > input {
            width: 99%;
            height: 50px;
          }
          .password-box {
            width: 35%;
          }
          .password-box > input {
            width: 100%;
            height: 50px;
          }
          p.email {
            color: ${accent};
            font-weight: bold;
          }
          input {
            border: 0.5px solid ${accent};
            background: #f1f8fe;
            border-radius: 5px;
          }
          .password {
            color: ${accent};
            font-weight: bold;
          }
          input.login {
            border: 2px solid ${accent};
            font-weight: bold;
            color: ${accent};
            width: 15%;
            height: 50px;
            margin: 50px 0 0 50px;
          }

          .forget-password {
            color: #a9a9a9;
            font-weight: bold;
            margin: 5px 0 25px 0;
          }
          ::placeholder {
            color: ${accent};
            font-weight: bold;
            font-size: 1rem;
            padding: 0 0 0 20px;
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

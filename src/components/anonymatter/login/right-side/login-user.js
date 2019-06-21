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
        <div>
          <div>
            <p className="email">Email</p>
            <input
              placeholder="xxx@example.com"
              //onChange={this.onEmailChanged}
              //value={email}
            />
          </div>
          <div>
            <p>Password</p>
            <input
            onChange={this.onPasswordChanged}
            value={password}
            />
            <p>Forgot password?</p>
          </div>
          <input
            value="LOGIN"
            type="submit"
            onClick={() => onLoginButtonClicked({ email, password })}
          />
        </div>
        <style jsx>{`
          p.email {
            color: ${accent};
            font-weight: bold;
          }
          input {
            padding: 20px 20px;

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

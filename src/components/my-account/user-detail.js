import React from "react";
import { checkUserAuth } from "../../redux/reducers/login";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { push } from "connected-react-router";

class UserDetail extends React.Component {
  componentDidMount = () => {
    const { userCredential, redirect } = this.props;
    if (!userCredential) {
      redirect("/welcome");
    }
  };

  render() {
    const { userCredential } = this.props;
    return (
      <div>
        {userCredential && (
          <div>
            <h1>User Details</h1>
            <div>
              <img />
              <ul>
                <li>{userCredential.email}</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userCredential } = state.user;
  return {
    userCredential
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkUserAuth: () => dispatch(checkUserAuth()),
    redirect: path => dispatch(push(path))
  };
};

UserDetail.propTypes = {
  checkUserAuth: PropTypes.func.isRequired,
  userCredential: PropTypes.shape().isRequired,
  redirect: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);

import React from "react";
import { checkUserAuth } from "../../redux/reducers/login";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { push } from "connected-react-router";
import RemoveAccountModal from "./delete-modal";

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleModal: false
    };

    this.onToggleModal = cred => {
      this.setState({
        isToggleModal: cred
      });
    };
  }
  componentDidMount = () => {
    const { userCredential, redirect } = this.props;
    if (!userCredential) {
      redirect("/welcome");
    }
  };

  render() {
    const { userCredential } = this.props;
    const { isToggleModal } = this.state;
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
            <div>
              <button onClick={() => this.onToggleModal(true)}>
                DELETE ACCOUNT
              </button>
            </div>
            {isToggleModal && (
              <RemoveAccountModal toggleModal={this.onToggleModal} />
            )}
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

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLogout } from "../redux/reducers/logout";

const MyAccountPage = props => {
  const { onLogoutButtonClicked } = props;
  return (
    <div>
      <h1>MyAccount Page</h1>
      <button onClick={onLogoutButtonClicked}>LOGOUT</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onLogoutButtonClicked: () => dispatch(userLogout())
  };
};

MyAccountPage.propTypes = {
  onLogoutButtonClicked: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(MyAccountPage);

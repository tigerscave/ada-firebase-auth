import React from "react";
import { connect } from "react-redux";
import AnonymatterNavBar from "../../components/anonymatter/navbar";
import UserAccountHeader from "../../components/anonymatter/user-account/account-header";
import MyPostedTweets from "../../components/anonymatter/user-account/my-posted-tweets";
import PropTypes from "prop-types";

const UserAccountPage = props => {
  const { userCredential } = props;
  return (
    <div>
      <AnonymatterNavBar />
      <UserAccountHeader />
      {userCredential && <MyPostedTweets />}
    </div>
  );
};

const mapStateToProps = state => {
  const { userCredential } = state.user;
  return {
    userCredential
  };
};

UserAccountPage.propTypes = {
  userCredential: PropTypes.array
};

UserAccountPage.defaultProps = {
  userCredential: []
};

export default connect(
  mapStateToProps,
  null
)(UserAccountPage);

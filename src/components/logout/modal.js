import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLogout } from "../../redux/reducers/logout";

const LogoutModal = props => {
  const { toggleModal, onLogoutButtonClicked } = props;
  return (
    <div className="container">
      <button className="close" onClick={() => toggleModal(false)}>
        CLOSE
      </button>
      <p>Really want to logout?</p>
      <button className="close" onClick={onLogoutButtonClicked}>
        LOGOUT
      </button>
      <style jsx>{`
        .container {
          position: absolute;
          top: 10rem;
          left: 10rem;
          width: 10rem;
          height: 10rem;
          background: gray;
        }
        button.close {
          marginbottom: 1rem;
        }
      `}</style>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onLogoutButtonClicked: () => dispatch(userLogout())
  };
};

LogoutModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  onLogoutButtonClicked: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(LogoutModal);

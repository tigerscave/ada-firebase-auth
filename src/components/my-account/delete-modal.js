import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteUser } from "../../redux/reducers/user";

const ConfirmDeleteModal = props => {
  const { toggleModal, onDeleteButtonClicked } = props;
  return (
    <div className="container">
      <button className="close" onClick={() => toggleModal(false)}>
        CLOSE
      </button>
      <p>Really wanna Delete your account?</p>
      <button className="close" onClick={onDeleteButtonClicked}>
        DELETE YOUR ACCOUNT
      </button>
      <style jsx>{`
        .container {
          position: absolute;
          top: 20rem;
          right: 10rem;
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
    onDeleteButtonClicked: () => dispatch(deleteUser())
  };
};

ConfirmDeleteModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  onDeleteButtonClicked: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(ConfirmDeleteModal);

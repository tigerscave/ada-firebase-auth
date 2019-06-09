import React, { useState } from "react";
import LogoutModal from "../components/logout/modal";
import UserDetail from "../components/my-account/user-detail";
import ConfirmDeleteModal from "../components/my-account/delete-modal";
import EditProfile from "../components/my-account/edit-user-profile";
import UpdateUserProfile from "../components/my-account/update-user-profile";
import { Link } from "react-router-dom";

const MyAccountPage = () => {
  const [isModalShown, toggleModal] = useState(false);
  const [isToggleModal, onToggleModal] = useState(false);
  return (
    <div>
      <h1>MyAccount Page</h1>
      <button onClick={() => toggleModal(true)}>LOGOUT</button>
      {isModalShown && <LogoutModal toggleModal={toggleModal} />}
      <UserDetail />
      <div>
        <button onClick={() => onToggleModal(true)}>DELETE ACCOUNT</button>
        {isToggleModal && <ConfirmDeleteModal toggleModal={onToggleModal} />}
      </div>
      <EditProfile />
      <div>
        <h3>Edit User Detail</h3>
        <Link to="/edit-user-detail">
          <button>Edit User Detail</button>
        </Link>
      </div>
      <UpdateUserProfile />
    </div>
  );
};

export default MyAccountPage;

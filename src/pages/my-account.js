import React, { useState } from "react";
import LogoutModal from "../components/logout/modal";
import UserDetail from "../components/my-account/user-detail";

const MyAccountPage = () => {
  const [isModalShown, toggleModal] = useState(false);
  return (
    <div>
      <h1>MyAccount Page</h1>
      <button onClick={() => toggleModal(true)}>LOGOUT</button>
      {isModalShown && <LogoutModal toggleModal={toggleModal} />}
      <UserDetail />
    </div>
  );
};

export default MyAccountPage;

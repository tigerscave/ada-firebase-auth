import React, { useState } from "react";
import LogoutModal from "../components/logout/modal";

const MyAccountPage = () => {
  const [isModalShown, toggleModal] = useState(false);
  return (
    <div>
      <h1>MyAccount Page</h1>
      <button onClick={() => toggleModal(true)}>LOGOUT</button>
      {isModalShown && <LogoutModal toggleModal={toggleModal} />}
    </div>
  );
};

export default MyAccountPage;

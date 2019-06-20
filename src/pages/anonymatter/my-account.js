import React, { useState } from "react";
import LogoutModal from "../../components/anonymatter/logout/modal";

const MyAccountPage = () => {
  const [isModalShown, toggleModal] = useState(false);
  return (
    <div>
      <div onClick={() => toggleModal(true)}>
        <i className="fas fa-sign-out-alt" />
        <p>Logout</p>
      </div>
      {isModalShown && <LogoutModal toggleModal={toggleModal} />}
    </div>
  );
};

export default MyAccountPage;

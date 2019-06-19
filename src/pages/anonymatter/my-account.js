import React, { useState } from "react";
import LogoutModal from "../../components/anonymatter/logout/modal";

const MyAccountPage = () => {
  const [isModalShown, toggleModal] = useState(false);
  return (
    <div>
      <button onClick={() => toggleModal(true)}>LOGOUT</button>
      {isModalShown && <LogoutModal toggleModal={toggleModal} />}
    </div>
  );
};

export default MyAccountPage;

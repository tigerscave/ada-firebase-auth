import React, { useState } from "react";
import LogoutModal from "../logout/modal";
import { darkGray } from "../../../styles/color";

const UserMenuModal = () => {
  const [isModalShown, toggleModal] = useState(false);

  return (
    <div className="menuContainer">
      <p>no_name</p>
      <ul>
        <li>
          <i className="far fa-user" />
          <span>My Tweets</span>
        </li>
        <li>
          <i className="fas fa-cog" />
          <span>My Tweets</span>
        </li>
        <li onClick={() => toggleModal(true)}>
          <i className="fas fa-sign-out-alt" />
          <span>Log out</span>
        </li>
      </ul>
      {isModalShown && <LogoutModal toggleModal={toggleModal} />}
      <style jsx>{`
        .menuContainer {
          position: absolute;
          right: 30px;
          border: 1.5px solid ${darkGray};
          background: white;
        }
      `}</style>
    </div>
  );
};

export default UserMenuModal;

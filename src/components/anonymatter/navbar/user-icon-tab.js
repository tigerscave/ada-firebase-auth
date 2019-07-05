import React, { useState } from "react";
import UserMenuModal from "./user-menu-modal";

const UserIconTab = () => {
  const [isMenuShown, toggleMenu] = useState(false);
  return (
    <div className="container">
      <button className="userIcon" onClick={() => toggleMenu(!isMenuShown)}>
        <i className="fas fa-user-circle" />
      </button>
      {isMenuShown && <UserMenuModal />}
      <style jsx>{`
        .container {
        //  background-color: green;
        }
        .userIcon {
          margin: 0 30px;
          font-size: 5rem;
          border: none;

        }
        .menuContainer {
          position: absolute;
          //  height: 300px;
          //  width: 200px;
          background: gray;
          //  display: none;
        }
      `}</style>
    </div>
  );
};

export default UserIconTab;

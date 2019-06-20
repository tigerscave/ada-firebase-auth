import React, { useState } from "react";
import UserMenuModal from "./user-menu-modal";

const UserIconTab = () => {
  const [isMenuShown, toggleMenu] = useState(false);
  return (
    <div>
      <button className="userIcon" onClick={() => toggleMenu(!isMenuShown)}>
        <i className="fas fa-user-circle" />
      </button>
      {isMenuShown && <UserMenuModal />}
      <style jsx>{`
        .userIcon {
          margin: 0 30px;
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

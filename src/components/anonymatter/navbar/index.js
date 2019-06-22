import React from "react";
import NavBarTab from "./nav-bar-tab";
import { darkGray } from "../../../styles/color";
import SearchArea from "./search-area";
import logoImage from "../../../static/icons/logo.png";
import UserIconTab from "./user-icon-tab";

const AnonymatterNavBar = () => (
  <div className="container">
    <NavBarTab
      iconName="fa fa-home"
      title="Home"
      onClicked={() => alert("Not implement yet")}
    />
    <NavBarTab
      iconName="fas fa-bell"
      title="Notification"
      onClicked={() => alert("Not implement yet")}
    />
    <div className="logo">
      <img src={logoImage} width="40" />
    </div>
    <SearchArea />
    <UserIconTab />
    <style jsx>{`
      .container {
        display: flex;
        border-bottom: 1.5px solid ${darkGray};
        padding: 10px 0 5px 0;
      }
      .logo {
        display: flex;
        flex: 3;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
);

export default AnonymatterNavBar;

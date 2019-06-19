import React from "react";
import NavBarTab from "./nav-bar-tab";
import logoImage from "../../../static/icons/logo.png";
import { darkGray } from "../../../styles/color";

const AnonymatterNavBar = () => (
  <div className="container">
    <NavBarTab iconName="fa fa-home" title="Home" />
    <NavBarTab iconName="fas fa-bell" title="Notification" />
    <div className="logo">
      <img src={logoImage} width="40" />
    </div>
    <div className="search">
      <input type="text" placeholder="search tags" />
      <i className="fa fa-search" />
    </div>
    <NavBarTab iconName="fas fa-user-circle" title="" />
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
      .search {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .fa-search {
        margin-left: -20px;
      }
    `}</style>
  </div>
);

export default AnonymatterNavBar;

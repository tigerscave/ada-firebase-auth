import React from "react";
import NavBarTab from "./nav-bar-tab";
import { darkGray } from "../../../styles/color";
import SearchArea from "./search-area";

const AnonymatterNavBar = () => (
  <div className="container">
    <NavBarTab iconName="fa fa-home" title="Home" />
    <NavBarTab iconName="fas fa-bell" title="Notification" />
    <SearchArea />
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
    `}</style>
  </div>
);

export default AnonymatterNavBar;

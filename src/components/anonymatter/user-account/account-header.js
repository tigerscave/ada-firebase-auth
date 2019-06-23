import React from "react";
import { darkGray } from "../../../styles/color";
import AccountHeaderTabs from "./account-tabs";

const AccountHeader = () => {
  return (
    <div className="container">
      <div className="userIconBox">
        <i className="fas fa-user-circle" />
        <p>no_name</p>
      </div>
      <AccountHeaderTabs />
      <style jsx>{`
        .container {
          margin-top: 110px;
          height: 60px;
          border: 1.5px solid ${darkGray};
          display: flex;
        }
        .userIconBox {
          position: absolute;
          left: 30px;
          top: 92px;
          // background: yellow;
        }
        .userIconBox i {
          font-size: 140px;
          color: ${darkGray};
        }
        .userIconBox p {
          font-size: 40px;
          margin: 0;
          font-weight: bold;
          color: ${darkGray};
        }
      `}</style>
    </div>
  );
};

export default AccountHeader;

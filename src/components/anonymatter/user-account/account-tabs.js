import React from "react";

const AccountHeaderTabs = () => {
  return (
    <div className="container">
      <ul className="tabs">
        <li>
          <p>Tweets</p>
          <p>30</p>
        </li>
        <li>
          <p>Following</p>
          <p>15</p>
        </li>
        <li>
          <p>Followers</p>
          <p>16</p>
        </li>
      </ul>
      <style jsx>{`
        .container {
          display: flex;
          margin: auto;
          background: yellow;
          width: 50%;
        }
        .tabs {
          display: flex;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .tabs li {
          margin-right: 30px;
          justify-content: center;
        }
        li p {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default AccountHeaderTabs;

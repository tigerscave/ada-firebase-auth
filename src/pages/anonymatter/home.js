import React from "react";
import AnonymatterNavBar from "../../components/anonymatter/navbar";
import DisplayTweets from "../../components/anonymatter/anonymatter-twitter/tweets";
import { darkGray } from "../../styles/color";
import DashboardProfile from "../../components/anonymatter/user-account/dashboard-profile";

const AnonymatterHome = () => (
  <div>
    <AnonymatterNavBar />
    <div className="contentContainer">
      <DashboardProfile />
      <div className="tweetsContainer">
        <DisplayTweets />
      </div>
    </div>
    <style jsx>{`
      .contentContainer {
        display: flex;
      }
      .tweetsContainer {
        width: 50%;
        margin-top: 15px;
        padding: 15px;
        border: 1.5px solid ${darkGray};
      }
    `}</style>
  </div>
);

export default AnonymatterHome;

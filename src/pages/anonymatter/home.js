import React from "react";
import AnonymatterNavBar from "../../components/anonymatter/navbar";
import DisplayTweets from "../../components/anonymatter/anonymatter-twitter/tweets";
import PostTweet from "../../components/anonymatter/anonymatter-twitter/post-tweet";
import { darkGray } from "../../styles/color";
import MyAccountPage from "./my-account";

const AnonymatterHome = () => (
  <div>
    <AnonymatterNavBar />
    <div>
      <MyAccountPage />
    </div>
    <div className="tweetsContainer">
      <PostTweet />
      <DisplayTweets />
    </div>

    <style jsx>{`
      .tweetsContainer {
        margin: auto;
        width: 50%;
        margin-top: 15px;
        padding: 15px;
        border: 1.5px solid ${darkGray};
      }
    `}</style>
  </div>
);

export default AnonymatterHome;

import React from "react";
import AnonymatterNavBar from "../../components/anonymatter/navbar";
import DisplayTweets from "../../components/twitter/tweets";

const AnonymatterHome = () => (
  <div>
    <AnonymatterNavBar />

    <DisplayTweets />
    <style jsx>{`
      div {
      }
    `}</style>
  </div>
);

export default AnonymatterHome;

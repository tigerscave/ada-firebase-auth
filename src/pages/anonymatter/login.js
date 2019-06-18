import React from "react";
import LoginLeftSide from "../../components/anonymatter/login/left-side";
import LoginRightSide from "../../components/anonymatter/login/right-side";

const AnonymatterLogin = () => (
  <div>
    <LoginLeftSide />
    <LoginRightSide />
    <style jsx>{`
      div {
        display: flex;
        min-height: 100vh;
      }
    `}</style>
  </div>
);

export default AnonymatterLogin;

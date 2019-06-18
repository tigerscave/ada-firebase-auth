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
      }
    `}</style>
  </div>
);

export default AnonymatterLogin;

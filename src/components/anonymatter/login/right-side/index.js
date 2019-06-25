import React from "react";
import LoginUser from "./login-user";
import AnonymatterLogoPanel from "./logo-panel";
import SignUp from "./sign-up";

const LoginRightSide = () => {
  return (
    <div className="container">
      <div className="content">
      <LoginUser />
      <SignUp />
      <AnonymatterLogoPanel />
      </div>
      <style jsx>{`
        .container {
          flex: 1;
          width: 50%;
        }
        .content {
          margin: 0 0 0 70px;
        }
      `}</style>
    </div>
  );
};

export default LoginRightSide;

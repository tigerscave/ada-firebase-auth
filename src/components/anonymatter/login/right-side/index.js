import React from "react";
import LoginUser from "./login-user";
import AnonymatterLogoPanel from "./logo-panel";
import SignUp from "./sign-up";

const LoginRightSide = () => {
  return (
    <div>
      <LoginUser />
      <SignUp />
      <AnonymatterLogoPanel />
      <style jsx>{`
        div {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default LoginRightSide;

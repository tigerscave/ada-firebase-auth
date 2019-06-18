import React from "react";
import LoginUser from "./login-user";

const LoginRightSide = () => {
  return (
    <div>
      <LoginUser />
      <style jsx>{`
        div {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default LoginRightSide;

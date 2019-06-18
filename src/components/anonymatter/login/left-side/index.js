import React from "react";
import DescriptionPanel from "./description-panel";
import { backgroundBlue } from "../../../../styles/color";
const LoginLeftSide = () => {
  return (
    <div>
      <DescriptionPanel
        iconName="fas fa-user-circle"
        title="Tweet without username"
      />
      <DescriptionPanel
        iconName="fas fa-trash"
        title="Tweet without username"
      />
      <DescriptionPanel
        iconName="fas fa-hashtag"
        title="Tweet without username"
      />
      <style jsx>{`
        div {
          flex: 1;
          background: ${backgroundBlue};
        }
      `}</style>
    </div>
  );
};

export default LoginLeftSide;

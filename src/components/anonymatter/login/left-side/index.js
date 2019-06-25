import React from "react";
import DescriptionPanel from "./description-panel";
import { backgroundBlue } from "../../../../styles/color";
const LoginLeftSide = () => {
  return (
    <div className="container">
      <div className="content">
        <DescriptionPanel
          iconName="fas fa-user-circle"
          title="Tweet without username."
        />
        <DescriptionPanel
          iconName="fas fa-trash"
          title="Your tweets will be deleted in 7 days."
        />
        <DescriptionPanel
          iconName="fas fa-hashtag"
          title="Find friend by hashtag."
        />
      </div>
      <style jsx>{`
        div.container {
          flex: 1;
          background: ${backgroundBlue};
          width: 50%;
        }

        div.content {
          margin-left: 200px;
          margin-top: 200px;
          background: yellow;

        }
      `}</style>
    </div>
  );
};

export default LoginLeftSide;

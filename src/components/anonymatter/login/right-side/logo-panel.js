import React from "react";
import LogoProfilePanel from "./logo-profile-panel";

const AnonymatterLogoPanel = () => {
  return (
    <div className="container">
      <div>
        <h1>Anonymatter</h1>
        <p>Nameless SNS</p>
      </div>
      <div className="logoComponents">
        <LogoProfilePanel />
        <LogoProfilePanel />
        <LogoProfilePanel />
        <LogoProfilePanel />
        <LogoProfilePanel />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          margin-top: 120px;
        }
        .logoComponents {
          margin-left: 20%;
        }
        h1 {
          font-size: 2.5rem;
          font-weight: bold;
          color: #686868;
        }
        p {
          color: #686868;
          font-size: 25px;
        }
      `}</style>
    </div>
  );
};

export default AnonymatterLogoPanel;

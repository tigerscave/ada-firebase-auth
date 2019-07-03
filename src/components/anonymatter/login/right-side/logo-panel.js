import React from "react";
import LogoProfilePanel from "./logo-profile-panel";

const AnonymatterLogoPanel = () => {
  return (
    <div className="container">
      <div>
        <h1>Anonymatter</h1>
        <p>NameLess SNS</p>
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
      `}</style>
    </div>
  );
};

export default AnonymatterLogoPanel;

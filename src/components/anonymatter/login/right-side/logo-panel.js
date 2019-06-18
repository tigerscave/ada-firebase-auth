import React from "react";
import LogoProfilePanel from "./logo-profile-panel";

const AnonymatterLogoPanel = () => {
  return (
    <div>
      <div>
        <h1>Anonymatter</h1>
        <p>NameLess SNS</p>
      </div>
      <div>
        <LogoProfilePanel />
        <LogoProfilePanel />
        <LogoProfilePanel />
        <LogoProfilePanel />
        <LogoProfilePanel />
      </div>
      <style jsx>{`
        div {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default AnonymatterLogoPanel;

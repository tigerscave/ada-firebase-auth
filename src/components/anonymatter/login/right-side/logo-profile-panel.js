import React from "react";

const LogoProfilePanel = () => {
  return (
    <div>
      <div>
        <i className="fas fa-user-circle" />
        <p>@no_name</p>
      </div>
      <style jsx>{`
        div {
          //  flex: 1;
          display: flex;
          padding: 5px;
        }
        i {
          color: #2699FB;
          font-size: 75px;
          margin-right: 15%;
        }

        p {
          color: darkGray;
          font-weight: 700;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default LogoProfilePanel;

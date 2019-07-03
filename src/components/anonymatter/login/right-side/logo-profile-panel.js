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
          justify-content: start;
        }
        i {
          color: #2699FB;
          font-size: 55px;
          margin-right: 15px;

        }

        p {
          color: darkGray;
          font-size: large;
          font-weight: bold;

        }
      `}</style>
    </div>
  );
};

export default LogoProfilePanel;

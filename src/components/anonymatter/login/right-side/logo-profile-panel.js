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
          color: #2699fb;
          font-size: 75px;
          margin-right: 15%;
        }

        p {
          color: #686868;
          font-weight: bold;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default LogoProfilePanel;

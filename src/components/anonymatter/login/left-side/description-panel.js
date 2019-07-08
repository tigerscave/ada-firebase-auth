import React from "react";
import PropTypes from "prop-types";
import { accent } from "../../../../styles/color";

const DescriptionPanel = props => {
  const { title, iconName } = props;
  return (
    <div>
      <div className="content">
        <i className={iconName} />
        <p>{title}</p>
      </div>
      <style jsx>{`
        div.content {
          display: flex;
          flex-direction: row;
          margin-bottom: 16px;
        }
        i {
          margin-top: 17px;
          margin-right: 24px;
          background: ${accent};
          width: 15px;
          height: 15px;
          border-radius: 50%;
          text-align: center;
          padding: 30px;
          color: white;
        }
        p {
          color: #009df5;
          margin-top: 40px;
          font-size: 2rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

DescriptionPanel.propTypes = {
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
};

export default DescriptionPanel;

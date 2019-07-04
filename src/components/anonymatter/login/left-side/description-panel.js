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
          color: #2699FB;
          font-size: 50px;
          margin-right: 15%;
          border-radius: 15px;
        }
        p {
          font-weight: bold;
          font-size: 24px;
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

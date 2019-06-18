import React from "react";
import PropTypes from "prop-types";

const DescriptionPanel = props => {
  const { title, iconName } = props;
  return (
    <div>
      <div>
        <i className={iconName} />
        <p>{title}</p>
      </div>
      <style jsx>{`
        div {
          //  flex: 1;
          //  background: yellow;
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

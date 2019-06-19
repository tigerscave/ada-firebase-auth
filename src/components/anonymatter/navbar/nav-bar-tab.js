import React from "react";
import PropTypes from "prop-types";
import { accent, strBlack } from "../../../styles/color";

const NavBarTab = props => {
  const { iconName, title, onClicked } = props;
  return (
    <div onClick={onClicked}>
      <i className={iconName} />
      <p>{title}</p>
      <style jsx>{`
        div {
          display: flex;
          flex: 1;
          color: ${strBlack};
          justify-content: center;
          align-items: center;
          padding: 10px 0;
        }
        div:hover {
          color: ${accent};
        }
        p {
          margin: 0px;
          margin-left: 10px;
          font-weight: bold;
        }
        i {
          font-size: 22px;
        }
      `}</style>
    </div>
  );
};

NavBarTab.propTypes = {
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired
};

export default NavBarTab;

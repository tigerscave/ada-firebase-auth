import React from "react";
import UserMenuModal from "./user-menu-modal";

class UserIconTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuShown: false
    };

    this.toggleMenu = () => {
      const { isMenuShown } = this.state;
      this.setState({
        isMenuShown: !isMenuShown
      });
    };
  }
  render() {
    const { isMenuShown } = this.state;
    return (
      <div>
        <button className="userIcon" onClick={this.toggleMenu}>
          <i className="fas fa-user-circle" />
        </button>
        {isMenuShown && <UserMenuModal />}
        <style jsx>{`
          .userIcon {
            margin: 0 30px;
          }
          .menuContainer {
            position: absolute;
            //  height: 300px;
            //  width: 200px;
            background: gray;
            //  display: none;
          }
        `}</style>
      </div>
    );
  }
}

export default UserIconTab;

import React, { useState } from "react";
import { searchUser } from "../../redux/reducers/usersDetail";
import { connect } from "react-redux";

const SearchUser = props => {
  const [userName, onUserNameChanged] = useState("");
  const { onSearchButtonClicked } = props;
  return (
    <div>
      <h1>Search Screen</h1>
      <input
        value={userName}
        onChange={e => onUserNameChanged(e.target.value)}
      />
      <button onClick={() => onSearchButtonClicked(userName)}>
        Search Friend
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchButtonClicked: cred => dispatch(searchUser(cred))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchUser);

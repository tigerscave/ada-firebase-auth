import React from "react";
import PropTypes from "prop-types";

const SearchedUserDetailModal = props => {
  const { searchedUser } = props;
  return (
    <div>
      <p>Your searched user is: </p>
      <h3>{searchedUser.userName}</h3>
      <h3>{searchedUser.familyName}</h3>
      <h3>{searchedUser.biography}</h3>
    </div>
  );
};

SearchedUserDetailModal.propTypes = {
  searchedUser: PropTypes.shape().isRequired
};
export default SearchedUserDetailModal;

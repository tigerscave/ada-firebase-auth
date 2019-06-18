import React from "react";
import { searchUser } from "../../redux/reducers/usersDetail";
import { connect } from "react-redux";
import SearchedUserDetailModal from "../../components/twitter/searched-user-modal";
import PropTypes from "prop-types";

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };

    this.onUserNameChanged = e => {
      this.setState({
        userName: e.target.value
      });
    };
  }

  render() {
    const { isLoading, searchedUser, onSearchButtonClicked } = this.props;
    const { userName } = this.state;
    return (
      <div>
        <h1>Search Screen</h1>
        <input value={userName} onChange={this.onUserNameChanged} />
        <button onClick={() => onSearchButtonClicked(userName)}>
          Search Friend
        </button>
        {isLoading && <h2>...searching...</h2>}
        {searchedUser && (
          <SearchedUserDetailModal searchedUser={searchedUser} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { searchedUser, isLoading } = state.usersDetail;
  return {
    isLoading,
    searchedUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchButtonClicked: cred => dispatch(searchUser(cred))
  };
};

SearchUser.propTypes = {
  onSearchButtonClicked: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchedUser: PropTypes.shape().isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchUser);

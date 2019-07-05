import React from "react";
import PropTypes from "prop-types";
import { searchTweetTag } from "../../../redux/reducers/tweet";
import { connect } from "react-redux";

class SearchArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };

    this.onSearchInputChanged = e => {
      this.setState({
        searchText: e.target.value
      });
    };

    this.onKeyPress = e => {
      const { searchText } = this.state;
      const { onSearchTweetTag } = this.props;
      if (e.key === "Enter") {
        onSearchTweetTag(searchText);
      }
    };
  }

  render() {
    const { searchText } = this.state;
    return (
      <div className="search">
        <input
          type="text"
          placeholder="search tags"
          value={searchText}
          onChange={this.onSearchInputChanged}
          onKeyPress={this.onKeyPress}
        />
        <i className="fa fa-search" />
        <style jsx>{`
          .search {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .fa-search {
            margin-left: -20px;
          }
          input {
            background: red;
            padding: 30px;
            color: green;
          }
        `}</style>
      </div>
    );
  }
}

const matDispatchToProps = dispatch => {
  return {
    onSearchTweetTag: tagName => dispatch(searchTweetTag(tagName))
  };
};

SearchArea.propTypes = {
  onSearchTweetTag: PropTypes.func.isRequired
};

export default connect(
  null,
  matDispatchToProps
)(SearchArea);

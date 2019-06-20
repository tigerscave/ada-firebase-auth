import React from "react";
import { connect } from "react-redux";
import { editMyTweet } from "../../../redux/reducers/tweet";
import PropTypes from "prop-types";
import TweetContent from "./tweet-content";
import PostTweet from "./post-tweet";

const DisplayTweets = props => {
  const { myTweets, isSearching, searchedTweetsTag } = props;
  const tweets = searchedTweetsTag ? searchedTweetsTag : myTweets;
  return (
    <div className="container">
      {!searchedTweetsTag && <PostTweet />}
      <div>
        {isSearching ? (
          <p>searching ...</p>
        ) : (
          <ul className="tweets-list">
            {tweets.map((tweet, index) => (
              <TweetContent key={index} tweet={tweet} />
            ))}
          </ul>
        )}
      </div>
      <style jsx>{`
        .container {
        }
        .tweets-list {
          width: 300px;
        }
        .tweet {
          border: 2px solid gray;
          margin-bottom: 10px;
        }
        i {
          font-size: 16px;
          margin: 5px 15px;
        }
      `}</style>
    </div>
  );
};

const mapStateToProps = state => {
  const { myTweets, isSearching, searchedTweetsTag } = state.postTweet;
  return {
    myTweets,
    isSearching,
    searchedTweetsTag
  };
};

const matDispatchToProps = dispatch => {
  return {
    onTweetEdit: id => dispatch(editMyTweet(id))
  };
};

DisplayTweets.propTypes = {
  myTweets: PropTypes.shape(),
  isSearching: PropTypes.bool,
  searchedTweetsTag: PropTypes.shape()
};

DisplayTweets.defaultProps = {
  myTweets: [],
  searchedTweetsTag: []
};

export default connect(
  mapStateToProps,
  matDispatchToProps
)(DisplayTweets);

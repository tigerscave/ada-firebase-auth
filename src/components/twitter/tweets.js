import React from "react";
import { connect } from "react-redux";
import { displayLatestTweets, editMyTweet } from "../../redux/reducers/tweet";
import PropTypes from "prop-types";
import TweetContent from "./tweet-content";

const DisplayTweets = props => {
  const { displayLatestTweets, latestTweet, myTweets } = props;
  return (
    <div className="container">
      <h1>Display tweets component</h1>
      {latestTweet && (
        <div>
          <p>{latestTweet.content}</p>
        </div>
      )}
      <button onClick={displayLatestTweets}>My Latest Tweet</button>
      <div>
        <ul className="tweets-list">
          {myTweets.map((tweet, index) => (
            <TweetContent key={index} tweet={tweet} />
          ))}
        </ul>
      </div>
      <style jsx>{`
        .container {
          margin: auto;
          width: 50%;
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
  const { latestTweet, myTweets } = state.postTweet;
  return {
    latestTweet,
    myTweets
  };
};

const matDispatchToProps = dispatch => {
  return {
    displayLatestTweets: () => dispatch(displayLatestTweets()),
    onTweetEdit: id => dispatch(editMyTweet(id))
  };
};

DisplayTweets.propTypes = {
  displayLatestTweets: PropTypes.func.isRequired,
  latestTweet: PropTypes.shape(),
  myTweets: PropTypes.shape()
};

DisplayTweets.defaultProps = {
  latestTweet: {},
  myTweets: []
};

export default connect(
  mapStateToProps,
  matDispatchToProps
)(DisplayTweets);

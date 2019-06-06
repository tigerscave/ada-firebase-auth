import React from "react";
import { connect } from "react-redux";
import { displayLatestTweets } from "../../redux/reducers/tweet";
import PropTypes from "prop-types";

const DisplayLatestMyTweet = props => {
  const { displayLatestTweets, latestTweet, myTweets } = props;
  return (
    <div>
      <h1>Display tweets component</h1>
      {latestTweet && (
        <div>
          <p>{latestTweet.content}</p>
        </div>
      )}
      <button onClick={displayLatestTweets}>My Latest Tweet</button>
      <div>
        <ul>
          {myTweets.map((tweet, index) => (
            <li key={index}>
              <p>{tweet.content}</p>
              <img width="200" src={tweet.imageUrl} />
            </li>
          ))}
        </ul>
      </div>
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
    displayLatestTweets: () => dispatch(displayLatestTweets())
  };
};

DisplayLatestMyTweet.propTypes = {
  displayLatestTweets: PropTypes.func.isRequired,
  latestTweet: PropTypes.shape(),
  myTweets: PropTypes.shape()
};

DisplayLatestMyTweet.defaultProps = {
  latestTweet: {},
  myTweets: {}
};

export default connect(
  mapStateToProps,
  matDispatchToProps
)(DisplayLatestMyTweet);

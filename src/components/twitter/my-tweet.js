import React from "react";
import { connect } from "react-redux";
import { displayTweets } from "../../redux/reducers/tweet";
import PropTypes from "prop-types";

const DisplayMyTweet = props => {
  const { displayTweets, latestTweet, myTweets } = props;
  return (
    <div>
      <h1>Display tweets component</h1>
      {latestTweet && (
        <div>
          <p>{latestTweet.tweetText}</p>
        </div>
      )}
      <button onClick={displayTweets}>Click me</button>
      <div>
        <ul>
          {myTweets.map((tweet, index) => (
            <li key={index}>{tweet.content}</li>
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
    displayTweets: () => dispatch(displayTweets())
  };
};

DisplayMyTweet.propTypes = {
  displayTweets: PropTypes.func.isRequired,
  latestTweet: PropTypes.shape().isRequired,
  myTweets: PropTypes.shape().isRequired
};
export default connect(
  mapStateToProps,
  matDispatchToProps
)(DisplayMyTweet);

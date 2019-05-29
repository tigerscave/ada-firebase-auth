import React from "react";
import { connect } from "react-redux";
import { displayTweets } from "../../redux/reducers/tweet";

const DisplayMyTweet = props => {
  const { displayTweets, latestTweet } = props;
  console.log(latestTweet);
  return (
    <div>
      <h1>Display tweets component</h1>
      {latestTweet && (
        <div>
          <p>{latestTweet.tweetText}</p>
        </div>
      )}
      <button onClick={displayTweets}>Click me</button>
    </div>
  );
};

const mapStateToProps = state => {
  const { postTweet } = state;

  return {
    latestTweet: postTweet.latestTweet
  };
};

const matDispatchToProps = dispatch => {
  return {
    displayTweets: () => dispatch(displayTweets())
  };
};

export default connect(
  mapStateToProps,
  matDispatchToProps
)(DisplayMyTweet);

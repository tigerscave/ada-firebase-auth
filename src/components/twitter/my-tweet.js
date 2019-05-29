import React from "react";
import { connect } from "react-redux";
import { displayTweets } from "../../redux/reducers/tweet";

const DisplayMyTweet = props => {
  const { displayTweets, latestTweet, myTweets } = props;
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
      <div>
        <ul>
          {myTweets.map(tweet => (
            <li>{tweet.content}</li>
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

export default connect(
  mapStateToProps,
  matDispatchToProps
)(DisplayMyTweet);

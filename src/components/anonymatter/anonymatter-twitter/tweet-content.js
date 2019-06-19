import React from "react";
import {
  deleteMyTweet,
  displayLatestTweets,
  editMyTweet
} from "../../../redux/reducers/tweet";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TweetContent = props => {
  const { onDeleteButtonClicked, tweet } = props;
  return (
    <li className="tweet">
      <p>{tweet.content}</p>
      <img width="200" src={tweet.imageUrl} />
      <div>
        <button onClick={() => onDeleteButtonClicked(tweet.tweetId)}>
          <i className="far fa-trash-alt" />
        </button>
      </div>
      <style jsx>{`
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
    </li>
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
    onDeleteButtonClicked: id => dispatch(deleteMyTweet(id)),
    onTweetEdit: id => dispatch(editMyTweet(id))
  };
};

TweetContent.propTypes = {
  onDeleteButtonClicked: PropTypes.func.isRequired,
  onTweetEdit: PropTypes.func.isRequired,
  tweet: PropTypes.shape().isRequired
};

export default connect(
  mapStateToProps,
  matDispatchToProps
)(TweetContent);

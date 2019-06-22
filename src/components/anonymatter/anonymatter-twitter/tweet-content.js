import React from "react";
import {
  deleteMyTweet,
  displayLatestTweets,
  editMyTweet
} from "../../../redux/reducers/tweet";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LikeIcons from "./like-icons";

const TweetContent = props => {
  const { onDeleteButtonClicked, tweet } = props;
  const date = tweet.createdAt.toDate();
  const formattedDate =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    String(date.getMinutes()).padStart(2, "0");
  return (
    <li className="tweet">
      <div>
        <i className="fas fa-user-circle" />
        <span>no_name</span>
        <span> . </span>
        <span>{formattedDate}</span>
      </div>
      <div>
        <p>{tweet.content}</p>
        <img width="200" src={tweet.imageUrl} />
        <div>
          <button onClick={() => onDeleteButtonClicked(tweet.tweetId)}>
            <i className="far fa-trash-alt" />
          </button>
        </div>
      </div>
      <div>
        <span>#{tweet.tag}</span>
        <LikeIcons tweet={tweet} />
      </div>
      <style jsx>{`
        .tweets-list {
          ///  width: 300px;
        }
        .tweet {
          //    border: 2px solid gray;
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

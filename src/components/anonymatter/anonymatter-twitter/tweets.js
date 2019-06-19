import React from "react";
import { connect } from "react-redux";
import { editMyTweet } from "../../../redux/reducers/tweet";
import PropTypes from "prop-types";
import TweetContent from "./tweet-content";

const DisplayTweets = props => {
  const { myTweets } = props;
  return (
    <div className="container">
      <div>
        <ul className="tweets-list">
          {myTweets.map((tweet, index) => (
            <TweetContent key={index} tweet={tweet} />
          ))}
        </ul>
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
  const { myTweets } = state.postTweet;
  return {
    myTweets
  };
};

const matDispatchToProps = dispatch => {
  return {
    onTweetEdit: id => dispatch(editMyTweet(id))
  };
};

DisplayTweets.propTypes = {
  myTweets: PropTypes.shape()
};

DisplayTweets.defaultProps = {
  myTweets: []
};

export default connect(
  mapStateToProps,
  matDispatchToProps
)(DisplayTweets);

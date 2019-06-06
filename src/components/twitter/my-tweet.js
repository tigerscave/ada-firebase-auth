import React, { useState } from "react";
import { connect } from "react-redux";
import {
  displayLatestTweets,
  deleteMyTweet,
  editMyTweet
} from "../../redux/reducers/tweet";
import PropTypes from "prop-types";
import EditTweetModal from "./edit-tweet-modal";

const DisplayLatestMyTweet = props => {
  const [isModalShown, onToggleModal] = useState(false);
  const {
    displayLatestTweets,
    latestTweet,
    myTweets,
    onDeleteButtonClicked,
    onTweetEdit
  } = props;
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
        <ul className="tweets-list">
          {myTweets.map((tweet, index) => (
            <li className="tweet" key={index}>
              <p>{tweet.content}</p>
              <img width="200" src={tweet.imageUrl} />
              <div>
                <button onClick={() => onDeleteButtonClicked(tweet.tweetId)}>
                  <i className="far fa-trash-alt" />
                </button>
                <button onClick={() => onToggleModal(true)}>
                  <i className="far fa-edit" />
                </button>
              </div>
              <div>
                {isModalShown && (
                  <EditTweetModal
                    onCanceled={onToggleModal}
                    onConfirmed={onTweetEdit}
                    tweet={tweet}
                    tweetImage={tweet.imageUrl}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
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
    onDeleteButtonClicked: id => dispatch(deleteMyTweet(id)),
    onTweetEdit: id => dispatch(editMyTweet(id))
  };
};

DisplayLatestMyTweet.propTypes = {
  displayLatestTweets: PropTypes.func.isRequired,
  onDeleteButtonClicked: PropTypes.func.isRequired,
  onTweetEdit: PropTypes.func.isRequired,
  latestTweet: PropTypes.shape(),
  myTweets: PropTypes.shape()
};

DisplayLatestMyTweet.defaultProps = {
  latestTweet: {},
  myTweets: []
};

export default connect(
  mapStateToProps,
  matDispatchToProps
)(DisplayLatestMyTweet);

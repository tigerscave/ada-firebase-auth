import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase/app";
import "firebase/firestore";
import { connect } from "react-redux";

class LikeIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTweetLiked: false
    };

    this.updateFeed = async isLiked => {
      const db = firebase.firestore();
      const { myId, tweet } = this.props;
      const userDoc = db.collection("users").doc(myId);
      const userSnapshot = await userDoc.get();
      const followerWithMyId = [...userSnapshot.data().follower, myId];
      followerWithMyId.map(async uid => {
        if (isLiked) {
          await db
            .collection(`users/${uid}/feed`)
            .doc(tweet.tweetId)
            .update({
              likedUsers: firebase.firestore.FieldValue.arrayUnion(myId)
            });
        } else {
          await db
            .collection(`users/${uid}/feed`)
            .doc(tweet.tweetId)
            .update({
              likedUsers: firebase.firestore.FieldValue.arrayRemove(myId)
            });
        }
      });
    };

    this.onLikeClicked = async () => {
      const { tweet, myId } = this.props;
      const { tweetId } = tweet;
      const db = firebase.firestore();
      await db
        .collection("tweets")
        .doc(tweetId)
        .update({
          likedUsers: firebase.firestore.FieldValue.arrayUnion(myId)
        });

      this.updateFeed(true);
    };

    this.onDislikeClicked = () => {
      const { tweet, myId } = this.props;
      const { tweetId } = tweet;
      const db = firebase.firestore();
      db.collection("tweets")
        .doc(tweetId)
        .update({
          likedUsers: firebase.firestore.FieldValue.arrayRemove(myId)
        });

      this.updateFeed(false);
    };
  }

  render() {
    const { tweet, myId } = this.props;
    const { likedUsers } = tweet;
    let isTweetLiked = likedUsers && likedUsers.some(id => id === myId);
    return (
      <span>
        {!isTweetLiked ? (
          <i onClick={this.onLikeClicked} className="far fa-heart" />
        ) : (
          <i onClick={this.onDislikeClicked} className="fas fa-heart" />
        )}
        <span>{likedUsers && likedUsers.length}</span>
        <style jsx>{`
          i {
            font-size: 16px;
            margin: 5px 15px;
            cursor: pointer;
          }
        `}</style>
      </span>
    );
  }
}

const mapStateToProps = state => {
  const { userCredential } = state.user;
  return {
    myId: userCredential ? userCredential.uid : null
  };
};

LikeIcons.defaultProps = {
  myId: ""
};

LikeIcons.propTypes = {
  tweet: PropTypes.shape().isRequired,
  myId: PropTypes.string
};

export default connect(
  mapStateToProps,
  null
)(LikeIcons);

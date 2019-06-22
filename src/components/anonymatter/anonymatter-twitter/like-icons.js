import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase/app";
import "firebase/firestore";
import { connect } from "react-redux";

class LikeIcons extends React.Component {
  constructor(props) {
    super(props);

    this.onLikeClicked = () => {
      const { tweetId, myId } = this.props;
      const db = firebase.firestore();
      db.collection("tweets")
        .doc(tweetId)
        .update({
          likedUsers: firebase.firestore.FieldValue.arrayUnion(myId)
        });
    };

    this.onDislikeClicked = () => {
      const { tweetId, myId } = this.props;
      const db = firebase.firestore();
      db.collection("tweets")
        .doc(tweetId)
        .update({
          likedUsers: firebase.firestore.FieldValue.arrayRemove(myId)
        });
    };
  }

  render() {
    return (
      <span>
        <i onClick={this.onLikeClicked} className="fas fa-heart" />
        <i onClick={this.onDislikeClicked} className="far fa-heart" />
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
  tweetId: PropTypes.string.isRequired,
  myId: PropTypes.string
};

export default connect(
  mapStateToProps,
  null
)(LikeIcons);

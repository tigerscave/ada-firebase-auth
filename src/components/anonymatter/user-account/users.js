import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import firebase from "firebase/app";
import "firebase/firestore";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.followButtonClicked = async uid => {
      const { myId } = this.props;

      const db = firebase.firestore();
      const docSnapshot = await db
        .collection("users")
        .doc(myId)
        .get();
      if (docSnapshot.exists) {
        await db
          .collection("users")
          .doc(myId)
          .update({
            followee: firebase.firestore.FieldValue.arrayUnion(uid)
          });
        await db
          .collection("users")
          .doc(uid)
          .update({
            follower: firebase.firestore.FieldValue.arrayUnion(myId)
          });
      } else {
        await db
          .collection("users")
          .doc(myId)
          .set({
            followee: [uid]
          });
      }
    };

    this.unfollowButtonClicked = async uid => {
      const { myId } = this.props;

      const db = firebase.firestore();
      const docSnapshot = await db
        .collection("users")
        .doc(myId)
        .get();
      if (docSnapshot.exists) {
        await db
          .collection("users")
          .doc(myId)
          .update({
            followee: firebase.firestore.FieldValue.arrayRemove(uid)
          });

        await db
          .collection("users")
          .doc(uid)
          .update({
            follower: firebase.firestore.FieldValue.arrayRemove(myId)
          });
      } else {
        await db
          .collection("users")
          .doc(myId)
          .set({
            followee: []
          });
      }
    };
  }

  componentDidMount = async () => {
    const db = firebase.firestore();
    const documentSnapshots = await db.collection("users").get();
    const { myId } = this.props;
    const users = [];

    documentSnapshots.forEach(doc => {
      if (doc.id !== myId) {
        users.push(doc.id);
      }
    });

    this.setState({ users });
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <p>hoge</p>
        {users.map((uid, index) => (
          <ul key={uid + "-" + index}>
            <li>NO_NAME</li>
            <li>
              <button onClick={() => this.followButtonClicked(uid)}>
                follow
              </button>
            </li>
            <li>
              <button onClick={() => this.unfollowButtonClicked(uid)}>
                unfollow
              </button>
            </li>
          </ul>
        ))}
        <style jsx>{`
          ul {
            display: flex;
            list-style: none;
          }
          li {
            margin: 0 0.5rem;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userCredential } = state.user;
  return {
    myId: userCredential ? userCredential.uid : null
  };
};

Users.defaultProps = {
  myId: ""
};

Users.propTypes = {
  myId: PropTypes.string
};

export default connect(
  mapStateToProps,
  null
)(Users);

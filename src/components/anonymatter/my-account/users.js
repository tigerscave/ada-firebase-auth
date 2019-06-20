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

    this.followButtonClicked = uid => {
      const { myId } = this.props;

      const db = firebase.firestore();
      db.collection("users")
        .doc(myId)
        .update({
          followee: firebase.firestore.FieldValue.arrayUnion(uid)
        });
    };

    this.unfollowButtonClicked = uid => {
      const { myId } = this.props;

      const db = firebase.firestore();
      db.collection("users")
        .doc(myId)
        .update({
          followee: firebase.firestore.FieldValue.arrayRemove(uid)
        });
    };
  }

  componentDidMount = async () => {
    const db = firebase.firestore();
    const documentSnapshots = await db.collection("users").get();

    const users = [];

    documentSnapshots.forEach(doc => {
      users.push(doc.id);
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

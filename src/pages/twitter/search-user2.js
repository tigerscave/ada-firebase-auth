import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";

class SearchUser2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputUserName: ""
    };

    this.onInputChanged = e => {
      this.setState({ inputUserName: e.target.value });
    };

    this.onButtonClicked = () => {
      const db = firebase.firestore();
      const name = this.state.inputUserName;
      db.collection("users")
        .orderBy("userName")
        .startAt(name)
        .endAt(name + "\uf8ff")
        .get()
        .then(documentSnapshots => {
          documentSnapshots.forEach(doc => {
            console.log(doc.data());
          });
        });
    };
  }

  render() {
    return (
      <div>
        Hello search user 2
        <input onChange={this.onInputChanged} placeholder="input user name" />
        <button onClick={this.onButtonClicked}>SEARCH</button>
      </div>
    );
  }
}

export default SearchUser2;

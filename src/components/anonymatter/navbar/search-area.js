import React from "react";

import firebase from "firebase/app";
import "firebase/firestore";

class SearchArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };

    this.onSearchInputChanged = e => {
      this.setState({
        searchText: e.target.value
      });
    };

    this.onKeyPress = e => {
      const db = firebase.firestore();
      const { searchText } = this.state;
      if (e.key === "Enter") {
        db.collection("tweets")
          .orderBy("tag")
          .startAt(searchText)
          .endAt(searchText + "\uf8ff")
          .get()
          .then(documentSnapshots => {
            documentSnapshots.forEach(doc => {
              const data = doc.data();
              // eslint-disable-next-line no-console
              console.log(data);
            });
          });
      }
    };
  }

  render() {
    const { searchText } = this.state;
    return (
      <div className="search">
        <input
          type="text"
          placeholder="search tags"
          value={searchText}
          onChange={this.onSearchInputChanged}
          onKeyPress={this.onKeyPress}
        />
        <i className="fa fa-search" />
        <style jsx>{`
          .search {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .fa-search {
            margin-left: -20px;
          }
        `}</style>
      </div>
    );
  }
}

export default SearchArea;

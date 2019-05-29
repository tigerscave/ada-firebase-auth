import React from "react";
import { connect } from "react-redux";
import { displayTweets } from "../../redux/reducers/tweet";

const DisplayMyTweet = props => {
  console.log(props.docs, "docsssss");
  const { displayTweets } = props;
  return (
    <div>
      <h1>Display tweets component</h1>
      <button onClick={displayTweets}>Click me</button>
    </div>
  );
};

const mapStateToProps = state => {
  const { docs } = state;
  console.log("docssss: ", docs);
  return {
    docs
  };
};

const matDispatchToProps = dispatch => {
  return {
    displayTweets: () => dispatch(displayTweets)
  };
};

export default connect(
  mapStateToProps,
  matDispatchToProps
)(DisplayMyTweet);

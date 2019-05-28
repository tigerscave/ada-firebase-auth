import React, { useState } from "react";
import { createTweet } from "../../redux/reducers/tweet";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PostTweetPage = props => {
  const [tweetText, onGetTweetText] = useState("");
  const { onPostButtonClicked } = props;
  return (
    <div>
      <h1>Post Tweet</h1>
      <textarea
        placeholder="What is in your mind, dear?"
        onChange={e => onGetTweetText(e.target.value)}
        value={tweetText}
        rows="6"
        cols="40"
      />
      <button onClick={() => onPostButtonClicked({ tweetText })}>
        Post my tweet
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onPostButtonClicked: cred => dispatch(createTweet(cred))
  };
};

PostTweetPage.propTypes = {
  onPostButtonClicked: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(PostTweetPage);

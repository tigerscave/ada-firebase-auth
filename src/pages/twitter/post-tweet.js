import React, { useState } from "react";
import { createTweet } from "../../redux/reducers/post-tweet";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PostTweetPage = props => {
  const [tweetText, onGetTweetText] = useState("");
  const { onCreateTweetPost } = props;
  return (
    <div>
      <h1>Post Tweet</h1>
      <input
        placeholder="password"
        onChange={e => onGetTweetText(e.target.value)}
        value={tweetText}
      />

      <button onClick={() => onCreateTweetPost({ tweetText })}>
        Post my tweet
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateTweetPost: cred => dispatch(createTweet(cred))
  };
};

PostTweetPage.propTypes = {
  onCreateTweetPost: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(PostTweetPage);

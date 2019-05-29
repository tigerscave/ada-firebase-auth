import React, { useState } from "react";
import { createTweet } from "../../redux/reducers/tweet";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const PostTweetPage = props => {
  const [tweetText, onGetTweetText] = useState("");
  const [tweetImage, onGetTweetImage] = useState("");
  const imageUrl = window.URL.createObjectURL(tweetImage)
  console.log('imageURL', imageUrl)
  const { onPostButtonClicked } = props;
  return (
    <div>
      <h1>Post Tweet</h1>
      <div>
        <textarea
          placeholder="What is in your mind, dear?"
          onChange={e => onGetTweetText(e.target.value)}
          value={tweetText}
          rows="6"
          cols="40"
        />
      </div>
      <div>
        <input type="file" onChange={e => onGetTweetImage(e.target.files[0])} />
      </div>
      <div>
        <button onClick={() => onPostButtonClicked({ tweetText, imageUrl })}>
          Post my tweet
        </button>
      </div>
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

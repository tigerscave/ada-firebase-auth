import React from "react";
import { createTweet } from "../../redux/reducers/tweet";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class PostTweetPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweetText: "",
      selectedImage: "",
      image: ""
    };

    this.onTweetImageChange = e => {
      this.setState({
        selectedImage: window.URL.createObjectURL(e.target.files[0]),
        image: e.target.files[0]
      });
    };

    this.onTweetTextChange = e => {
      this.setState({
        tweetText: e.target.value
      });
    };
  }

  render() {
    const { onPostButtonClicked } = this.props;
    const { tweetText, selectedImage, image } = this.state;
    return (
      <div>
        <h1>Post Tweet</h1>
        <textarea
          placeholder="What is in your mind, dear?"
          onChange={this.onTweetTextChange}
          value={tweetText}
          rows="6"
          cols="40"
        />
        <div>
          <img width="250" src={selectedImage} />
          <input onChange={this.onTweetImageChange} type="file" />
        </div>
        <button onClick={() => onPostButtonClicked({ tweetText, image })}>
          Post my tweet
        </button>
      </div>
    );
  }
}

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

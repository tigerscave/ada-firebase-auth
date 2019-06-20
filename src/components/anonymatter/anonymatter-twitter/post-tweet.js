import React from "react";
import { createTweet } from "../../../redux/reducers/tweet";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class PostTweet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweetText: "",
      selectedImage: "",
      image: "",
      tag: ""
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

    this.onTweetButtonClicked = () => {
      const { onPostTweet } = this.props;
      const { tweetText, image, tag } = this.state;
      onPostTweet({ tweetText, image, tag });
      this.setState({
        tweetText: "",
        selectedImage: "",
        tag: ""
      });
    };

    this.onTagInputChanged = e => {
      this.setState({
        tag: e.target.value
      });
    };
  }

  render() {
    const { tweetText, selectedImage } = this.state;
    return (
      <div className="container">
        <div className="">
          <i className="fas fa-user-circle" />
          <textarea
            placeholder="What is in your mind, dear?"
            onChange={this.onTweetTextChange}
            value={tweetText}
            cols="70"
          />
        </div>
        <div>
          <span>#</span>
          <input placeholder="tag" onChange={this.onTagInputChanged} />
          <img width="250" src={selectedImage} />
          <input onChange={this.onTweetImageChange} type="file" />
          <button onClick={this.onTweetButtonClicked}>Tweet</button>
        </div>
        <style jsx>{`
          .container {
          }
          textarea {
            height: 1em;
            transition: all ease-in-out 0.5s;
            appearance: none;
            -webkit-appearance: none;
            border: 1px solid rgba(0, 0, 0, 0.5);
            border-radius: 3px;
            padding: 0.5em;
            font-size: 1em;
            // &:valid {
            //   height: 2em;
            // }
          }
          textarea:focus {
            height: 4em;
          }
        `}</style>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPostTweet: tweetData => dispatch(createTweet(tweetData))
  };
};

PostTweet.propTypes = {
  onPostTweet: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(PostTweet);

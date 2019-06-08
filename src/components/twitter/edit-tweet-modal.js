import React from "react";
import PropTypes from "prop-types";

class EditTweetModal extends React.Component {
  constructor(props) {
    super(props);
    const { tweet } = this.props;
    this.state = {
      tweetText: tweet.content,
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

    this.onConfirmButtonClicked = () => {
      const { onCanceled, onConfirmed, tweet } = this.props;
      const { tweetText, image } = this.state;
      onConfirmed({
        tweetId: tweet.tweetId,
        content: tweetText,
        image
      });

      onCanceled(false);
    };
  }

  componentDidMount() {
    const { tweet } = this.props;
    this.setState({
      selectedImage: tweet.imageUrl
    });
  }

  render() {
    const { onCanceled, tweetImage } = this.props;
    const { tweetText, selectedImage } = this.state;
    return (
      <div className="container">
        <div>
          <textarea
            value={tweetText}
            onChange={this.onTweetTextChange}
            rows="6"
            cols="40"
          />
          <div>
            <img width="200" src={selectedImage ? selectedImage : tweetImage} />
            <input onChange={this.onTweetImageChange} type="file" />
          </div>
        </div>
        <div>
          <button className="close" onClick={() => onCanceled(false)}>
            Cancel
          </button>
          <button className="close" onClick={this.onConfirmButtonClicked}>
            Confirm
          </button>
        </div>
        <style jsx>{`
          .container {
            position: absolute;
            top: 10rem;
            left: 15rem;
            width: 10rem;
            height: 10rem;
            background: lightGray;
            padding: 30px;
            width: 450px;
            height: 300px;
          }
          button.close {
            marginbottom: 1rem;
          }
        `}</style>
      </div>
    );
  }
}

EditTweetModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  onLogoutButtonClicked: PropTypes.func.isRequired,
  onCanceled: PropTypes.func.isRequired,
  onConfirmed: PropTypes.func.isRequired,
  tweet: PropTypes.shape().isRequired,
  tweetImage: PropTypes.string.isRequired
};

export default EditTweetModal;
